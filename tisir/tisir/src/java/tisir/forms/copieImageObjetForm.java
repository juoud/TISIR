/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//certaines partie de ces code sont prises et adaptée des sources suivantes :
//http://www.programcreek.com/2009/02/java-convert-image-to-byte-array-convert-byte-array-to-image/
// https://github.com/opencv-java/
//http://answers.opencv.org/question/31505/how-load-and-display-images-with-java-using-opencv-solved/


package tisir.forms;


import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.ObjectInputStream;
import java.io.StringReader;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.ShortBuffer;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.imageio.ImageIO;
import javax.management.StringValueExp;
import javax.servlet.http.HttpServletRequest;
import org.opencv.core.Core;
import org.opencv.core.Mat;
import org.opencv.core.MatOfPoint;
import org.opencv.core.Point;
import org.opencv.core.Scalar;
import org.opencv.core.Size;
import org.opencv.imgcodecs.Imgcodecs;
import org.opencv.imgproc.Imgproc;
import org.opencv.utils.Converters;
import tisir.beans.ImageObjetBean;


/**
 *
 * @author Administrateur
 */
public final class ImageObjetForm {
    private static final String CHAMP_DONNEEIMAGE = "donneeImage";
    private static final String CHAMP_LARGEURIMAGE = "largeurImage";
    private static final String CHAMP_HAUTEURIMAGE = "hauteurImage";
    
    public static final int TAILLE_TAMPON = 10240; // 10 ko
    
    //Intervalle de couleurs avant la couleur vert
    public static final int VALEURDEBUTHUE =0; //120;//
    public static final int VALEURDEBUTSATURATION=0;//35 ;//60;
    public static final int VALEURDEBUTVALUE=0;//100; //25;//50;
                    
    public static final int VALEURFINHUE =30;//30;28;//388;//Nous avons exclu la couleur verte dans l’intervalle de Hue ou teinte
    public static final int VALEURFINSATURATION=255;//200; 
    public static final int VALEURFINVALUE=255;
    
    //Intervalle de couleurs après la couleur vert
    public static final int VALEURDEBUTHUE2 =89;//122;//118;
    public static final int VALEURFINHUE2 =360;//Nous avons exclu la couleur verte dans l’intervalle de Hue ou teinte
    
    //Superficie minimale de contours
    public static final int SUPERFICIEMINIMALE_CONTOURS =10000;//122;//118;
    
    public File file=null;
    public File[] files = null;
    
    //Listes des contours des images du dossier "tisirImages" et des hierarchies dans lesquelles ces contours sont contenus
    Map<String, Mat> listHierarchieObjetsDossierTisirImage = new HashMap<>();
    Map<String, Mat> listContoursObjetsDossierTisirImage = new HashMap<>(); //Map<String, List<MatOfPoint>>
    
    //Listes des contours de l'image capturée par la caméra
    Map<String, Mat> listHierarchieObjetsImageCapturee = new HashMap<>(); 
    Map<String, Mat> listContoursObjetsImageCapturee = new HashMap<>(); //Map<String, List<MatOfPoint>>
    
    private String resultat;
    private Map<String, String> erreurs = new HashMap<>();//HashMap<String, String>();

    public String getResultat() {
        return resultat;
    }

    public Map<String, String> getErreurs() {
        return erreurs;
    }
    
    public ImageObjetBean verifierDonneeimage(HttpServletRequest request, String dossierimagespecimen, String dossierimagescapturees, String dossierimagessansbruit) throws FileNotFoundException, IOException{        
        //Récupération des images spécimen qui seront conserver dans le tableau files[]
        listeFichiersD1Dossier(dossierimagespecimen);
        
        //Chargement et traitements des images specimen à l'aide d'openCV
        ///charger1Image(dossierimagespecimen + files[2].getName());
        for (File file1 : files){
            traitementImages(dossierimagespecimen + file1.getName(), file1.getName(), dossierimagessansbruit, listHierarchieObjetsDossierTisirImage, listContoursObjetsDossierTisirImage);
        }
                
        //Initialisation du bean représentant la donnée d'une image
        ImageObjetBean imageobjet = new ImageObjetBean();
        
        //Récupération du champ donneeImage
        String donneeImage = getValeurChamp(request, CHAMP_DONNEEIMAGE);
        
        //Récupération de la largeur de l'image
        String largeurImage = getValeurChamp(request, CHAMP_LARGEURIMAGE);
        
        //Récupération de la largeur de l'image
        String hauteurImage = getValeurChamp(request, CHAMP_HAUTEURIMAGE);
        
        //if (erreurs.isEmpty()){
        //Validation de la largeur de l'image
        int w = -10;
        try {
            w = validationLargeurImage(largeurImage);
        } catch (Exception e) {
            setErreur(CHAMP_LARGEURIMAGE, e.getMessage());
        }
        imageobjet.setLargeurImage(w);
        
        //Validation de la hauteur de l'image
        int h = -10;
        try {
            h = validationHauteurImage(hauteurImage);
        } catch (Exception e) {
            setErreur(CHAMP_HAUTEURIMAGE, e.getMessage());
        }
        imageobjet.setHauteurImage(h);
        //}
        
        //Validation de la donneeImage
        try{
            //System.out.printf("donneeImage : \n%s\n", donneeImage);
            validationDonneImage(donneeImage);
            
            //On écrit donneeImage sur le disque
            ecrireDonneeImageCaptureeSurDisque(donneeImage, dossierimagescapturees);
            
            //System.out.printf("donneeImage (DEMO): \n%s\n", donneeImage);
            //System.out.printf("doneeeeeeeee %s\n ", findEdges(donneeImage, w, h));
            
        }catch(Exception e){
            setErreur(CHAMP_DONNEEIMAGE, e.getMessage());
        }
        imageobjet.setDonneeImage(donneeImage);
        imageobjet.setNomImage("donneeImageCapture"+ String.valueOf( System.currentTimeMillis()));
        //On reprend l'image capturée déjà sur disque pour des traitements de reconnaissance de forme
        listeFichiersD1Dossier(dossierimagescapturees);
        traitementImages(dossierimagescapturees + files[files.length-1].getName(), files[files.length-1].getName(), dossierimagessansbruit, listHierarchieObjetsImageCapturee, listContoursObjetsImageCapturee);
        
        //Si aucune erreur n'est survenue jusqu'à présent
        ///Comparer les données des images ...........
        comparaisonContours();
        System.out.println("resultat : " + resultat);
        
        return imageobjet;
    }
    
        
    /*Suppression des bruits, conversion des couleurs en HSV pour faciliter la détection, 
    détection des formes et écriture sur disque*/
    //Sources : http://answers.opencv.org/question/31505/how-load-and-display-images-with-java-using-opencv-solved/
    public void traitementImages(String nomImage, String nomFichier, String dossierDestinationImage, Map<String, Mat> listHierarchies, Map<String, Mat> listContours){
        //System.out.println("Matrice de l'image :" + Imgcodecs.imread(nomImage.toString()).dump());
        System.out.println("chemin d'accès à l'image : " + nomImage);
        Mat matriceImage = Imgcodecs.imread(nomImage); //Chargement de l'image dans une matrice carrée
        Mat matImageArecuperer1 = new Mat();
        Mat matImageArecuperer2 = new Mat();
        Mat matImageArecuperer = new Mat();
        Mat matFinaleOperateurMorphologiq = new Mat();
        
        System.out.printf( "%s","Conversion de la matrice openCV d'image en BufferedImage (java) en cours ...");
        
        System.out.printf( "MatriceImage.channels () : %s\n",matriceImage.channels());
        
        int elementBufferedImage = BufferedImage.TYPE_BYTE_GRAY;
        if(matriceImage.channels()>1){
            Mat matImageSansBruit = new Mat();
            Mat matImageSansBruitEnHSV = new Mat();
            
            //Suppression de bruit dans l'image encours
            Imgproc.bilateralFilter(matriceImage, matImageSansBruit, 5, 175, 175);
            ///Imgproc.blur(matriceImage, matImageSansBruit, new Size(15,15));
            
            //Conversion en HSV
            Imgproc.cvtColor(matImageSansBruit, matImageSansBruitEnHSV, Imgproc.COLOR_BGR2HSV);
            elementBufferedImage = BufferedImage.TYPE_3BYTE_BGR;
            matriceImage = matImageSansBruitEnHSV; //Cette matrice est nécessaire pour la détection
        }
        
        //Récupération des seuils min et max de H, S et V avant les couleurs vert
        Scalar valHSVmin = new Scalar(VALEURDEBUTHUE, VALEURDEBUTSATURATION, VALEURDEBUTVALUE);
        Scalar valHSVmax = new Scalar(VALEURFINHUE, VALEURFINSATURATION, VALEURFINVALUE);
        
        //Récupération des seuils min et max de H, S et V après les couleurs vert
        Scalar valHSVmin2 = new Scalar(VALEURDEBUTHUE2, VALEURDEBUTSATURATION, VALEURDEBUTVALUE);
        Scalar valHSVmax2 = new Scalar(VALEURFINHUE2, VALEURFINSATURATION, VALEURFINVALUE);

        System.out.printf("Intervalle de valeurs fixé de HUE avant les couleurs à dominance vert : %s%s%s", String.valueOf(valHSVmin.val[0]), " - ", String.valueOf(valHSVmax.val[0]));
        System.out.printf("Intervalle de valeurs fixé de HUE après les couleurs à dominance vert : %s%s%s", String.valueOf(valHSVmin2.val[0]), " - ", String.valueOf(valHSVmax2.val[0]));
        System.out.printf("Intervalle de valeurs fixé de SATURATION : %s%s%s", String.valueOf(valHSVmin.val[1]), " - ", String.valueOf(valHSVmax.val[1]));
        System.out.printf("Intervalle de valeurs fixé de HUE : %s%s%s", String.valueOf(valHSVmin.val[2]), " - ", String.valueOf(valHSVmax.val[2]));
        
        //////////Filtre pour laisser passer uniquement les couleurs ne contenant pas vert
        Core.inRange(matriceImage, valHSVmin, valHSVmax, matImageArecuperer1);
        Core.inRange(matriceImage, valHSVmin2, valHSVmax2, matImageArecuperer2);
        
        //On associe les éléments de "matImageArecuperer1" à ceux de "matImageArecuperer2"
       Core.add(matImageArecuperer1, matImageArecuperer2, matImageArecuperer);
        
        //Affichage à l'écran de données binaires de l'image en cours
        byte []byteImage = new byte[matriceImage.channels()*matriceImage.cols()*matriceImage.rows()];
        matriceImage.get(0, 0, byteImage);
        ///System.out.println(nomFichier + " :: byteImage en cours : " + Arrays.toString(byteImage));
        
        //Écriture des données de l'image encours "matriceImage" dans un BufferedImage
        BufferedImage imageEncours = new BufferedImage(matriceImage.cols(), matriceImage.rows(), elementBufferedImage);
        imageEncours.getRaster().setDataElements(0, 0, matriceImage.cols(), matriceImage.rows(), byteImage);
        
        //Écriture de l'image sur disque
        long id = System.currentTimeMillis();
        String n = nomFichier;
        n = n + "ImageSansBruitEnHSV" + id + ".png";
        ecritureDonneesImagesOpenCVdansUnFichierPNG(imageEncours, n, dossierDestinationImage);
                
        //Écriture des données de l'image à reccupérer "matImageArecuperer" dans un BufferedImage
        byte []byteImageArecuperer = new byte[matImageArecuperer.channels()*matImageArecuperer.cols()*matImageArecuperer.rows()];
        matImageArecuperer.get(0, 0, byteImageArecuperer);
        ///System.out.println(nomFichier +  " :: byteImageArecuperer en cours : " + Arrays.toString(byteImageArecuperer));
        
        BufferedImage imageArecuperer = new BufferedImage(matImageArecuperer.cols(), matImageArecuperer.rows(), BufferedImage.TYPE_BYTE_BINARY);
        imageArecuperer.getRaster().setDataElements(0, 0, matImageArecuperer.cols(), matImageArecuperer.rows(), byteImageArecuperer);
        
        
        n = nomFichier + "ImageSansBruitEnHSVaRecuperer" + id + ".png";
        ecritureDonneesImagesOpenCVdansUnFichierPNG(imageArecuperer, n, dossierDestinationImage);
        
        System.out.printf( "%s","Conversion de la matrice openCV d'image en BufferedImage (java) effectuée avec succès!!!");
        
        //Matrices des opérateurs erode et dilate
        Mat matPortionImageErode = Imgproc.getStructuringElement(Imgproc.MORPH_RECT, new Size(7, 7));
        Mat matPortionImageDilate = Imgproc.getStructuringElement(Imgproc.MORPH_RECT, new Size(10, 10));
        
        Imgproc.erode(matImageArecuperer, matFinaleOperateurMorphologiq, matPortionImageErode);
        Imgproc.erode(matImageArecuperer, matFinaleOperateurMorphologiq, matPortionImageErode);
        
        Imgproc.dilate(matImageArecuperer, matFinaleOperateurMorphologiq, matPortionImageDilate);
        Imgproc.dilate(matImageArecuperer, matFinaleOperateurMorphologiq, matPortionImageDilate);
        
        //Écriture des données de l'image à reccupérer "matImageArecuperer" dans un BufferedImage
        byte []byteImageArecupOpMorph = new byte[matFinaleOperateurMorphologiq.channels()*matFinaleOperateurMorphologiq.cols()*matFinaleOperateurMorphologiq.rows()];
        matFinaleOperateurMorphologiq.get(0, 0, byteImageArecupOpMorph);
        ///System.out.println(nomFichier + " :: byteImageArecupOpMorph en cours : " + Arrays.toString(byteImageArecupOpMorph));
        
        BufferedImage imageArecupOpMorph = new BufferedImage(matFinaleOperateurMorphologiq.cols(), matFinaleOperateurMorphologiq.rows(), BufferedImage.TYPE_BYTE_BINARY);
        imageArecupOpMorph.getRaster().setDataElements(0, 0, matFinaleOperateurMorphologiq.cols(), matFinaleOperateurMorphologiq.rows(), byteImageArecupOpMorph);
        
        n = nomFichier + "ImageSansBruitEnHSVaRecupOpMorphologiq" + id + ".png";        
        ecritureDonneesImagesOpenCVdansUnFichierPNG(imageArecupOpMorph, n, dossierDestinationImage);
        
        //Déterminer les contours des objets
        List<MatOfPoint> contoursObjets = new ArrayList<>();
        Mat hierarchieObjet = new Mat();
        
        /*Il me faut :
            - hierarchieObjet pour toutes images du dossier tisirImages
            - hierarchieObjet pour l'image capturée
            - contoursObjets pour chaque hierarchieObjet des images du dossier tisirImages
            - contoursObjets pour hierarchieObjet de l'image capturée
        */
        
        //trouver les contours
        Imgproc.findContours(matFinaleOperateurMorphologiq, contoursObjets, hierarchieObjet, Imgproc.RETR_CCOMP, Imgproc.CHAIN_APPROX_SIMPLE);
        
        //S'il y a des contours 
        if (hierarchieObjet.size().height>0 && hierarchieObjet.size().width>0){
            
            
            listHierarchies.put(nomFichier+"MatriceHierarchie", hierarchieObjet);
            
            for(int i = 0; i>=0; i = (int)hierarchieObjet.get(0, i)[0]){
                //Conversion des MatOfPoints de "contoursObjets" en Lis<Point>
                List<Point> listPointsContoursObjets= new ArrayList<>();
                for (int j=0; j<contoursObjets.size();j++) {
                    //Conversion des MatOfPoints de "contoursObjets" en cours en Lis<Point>
                    List<Point> listPointsContoursObjetsEncours = new ArrayList<>();
                    listPointsContoursObjetsEncours.addAll( contoursObjets.get(j).toList());
                    //Coversion de la liste points du contour listPointsContoursObjetsEncours en Matrice
                    Mat matPointContoursObjetsEncours = Converters.vector_Point_to_Mat(listPointsContoursObjetsEncours);        
                    ///Calcul de la superficie du contours en cours
                    double superficieContoursObjetEncours = Imgproc.contourArea(matPointContoursObjetsEncours);
                    System.out.println(nomFichier + "::-:: matPointContoursObjets de contoursObjets  " + j + " \n\t\t Taille de la matrice : "+ matPointContoursObjetsEncours.size().width +" X "+ matPointContoursObjetsEncours.size().height + " \n\t\t:: Surperficie de contoursObjets  " + Math.round( superficieContoursObjetEncours));
                    System.out.println();                    
                    
                    //Si la superficie du contours est assez grande à SUPERFICIEMINIMALE_CONTOURS, alors on l'ajoute dans la grande liste
                    //On élimine systématiquement les petits contours
                    if (superficieContoursObjetEncours>=SUPERFICIEMINIMALE_CONTOURS){
                        listPointsContoursObjets.addAll(contoursObjets.get(j).toList()); 
                    }    
                }
                
                System.out.println(nomFichier + ":: listPointsContoursObjets :: liste des points P du contours : " + listPointsContoursObjets.toString());
                System.out.println();
                
                //Coversion de la liste points du contour listPointsContoursObjets en Matrice
                Mat matPointContoursObjets = Converters.vector_Point_to_Mat(listPointsContoursObjets);
                ///Calcul de la superficie du contours
                double superficieContoursObjet = Imgproc.contourArea(matPointContoursObjets);
                System.out.println(nomFichier + " :: matPointContoursObjets de contoursObjets  " + i + " \n\t\t Taille de la matrice : "+ matPointContoursObjets.size().width +" X "+ matPointContoursObjets.size().height + " \n\t\t:: Surperficie de contoursObjets  " + Math.round( superficieContoursObjet));
                System.out.println("------------------------------------------------");
                
                /// old ::: listContours.put(nomFichier+"MatriceHierarchie_ContoursObjets" + String.valueOf(i), contoursObjets);
                listContours.put(nomFichier+"MatriceHierarchie_ContoursObjets" + String.valueOf(i), matPointContoursObjets);
                Imgproc.drawContours(matriceImage, contoursObjets, i, new Scalar(255, 255, 255),3);
                
                System.out.println("--RÉSUMÉ CONTOURS ET HIERARCHIE CONTOURS----");
                System.out.println();
                System.out.println(nomFichier + " \n\t\t :: Taille de listHierarchies " + listHierarchies.size() + " \n\t\t :: Taille de  listContours : " +  listContours.size());
                System.out.println();
                System.out.println("===============================");
                System.out.println("===============================");
            }
        }

        //Écriture des données de l'image à reccupérer "matriceImage" dans un BufferedImage
        byteImage = new byte[matriceImage.channels()*matriceImage.cols()*matriceImage.rows()];
        matriceImage.get(0, 0, byteImage);
        ///System.out.println(nomFichier + " :: byteImage en cours : " + Arrays.toString(byteImage));
        
        //Écriture des données de l'image encours "matriceImage" dans un BufferedImage
        imageEncours = new BufferedImage(matriceImage.cols(), matriceImage.rows(), elementBufferedImage);
        imageEncours.getRaster().setDataElements(0, 0, matriceImage.cols(), matriceImage.rows(), byteImage);
        
        n = nomFichier + "ImageSansBruitEnHSVobjetDetecte" + id + ".png";        
        ecritureDonneesImagesOpenCVdansUnFichierPNG(imageEncours, n, dossierDestinationImage);    
    }
    
    public void comparaisonContours (){
        Set<String> clesContoursObjetsImageCapturee = listContoursObjetsImageCapturee.keySet();
        
        if (clesContoursObjetsImageCapturee.size()>0){
            System.out.println();
            System.out.println("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
            double similariteMin = (double)200;
            
            for (String cleContourImgCap : clesContoursObjetsImageCapturee ){
                System.out.println("\t -------------------------------------------");
                //System.out.println("cleContourImgCap : " + cleContourImgCap );
                
                //double similariteMin = (double)200;
                
                Mat matriceContoursObjetsImageCapturee = listContoursObjetsImageCapturee.get(cleContourImgCap);
                
                if (matriceContoursObjetsImageCapturee.size().width>0 && matriceContoursObjetsImageCapturee.size().height>0){                
                    /*System.out.println("\t Taille de la matrice : " + matriceContoursObjetsImageCapturee.size().width +" X " + matriceContoursObjetsImageCapturee.size().height);
                    System.out.println("\t Aire du contours : " + Imgproc.contourArea(matriceContoursObjetsImageCapturee));
                    System.out.println();*/
                    
                    Set<String> clesContoursObjetsDossierTisirImage = listContoursObjetsDossierTisirImage.keySet();
                    if (clesContoursObjetsDossierTisirImage.size()>0){
                        for (String cleContourImgDosTisir : clesContoursObjetsDossierTisirImage){
                            
                            System.out.println("cleContourImgCap : " + cleContourImgCap );
                            System.out.println("\t Taille de la matrice : " + matriceContoursObjetsImageCapturee.size().width +" X " + matriceContoursObjetsImageCapturee.size().height);
                            System.out.println("\t Aire du contours : " + Imgproc.contourArea(matriceContoursObjetsImageCapturee));
                            System.out.println("---");
                            
                            System.out.println("cleContourImgDosTisir : " + cleContourImgDosTisir);

                            Mat matriceContoursObjetsDossierTisirImage = listContoursObjetsDossierTisirImage.get(cleContourImgDosTisir);
                            
                            if (matriceContoursObjetsDossierTisirImage.size().width>0 && matriceContoursObjetsDossierTisirImage.size().height>0){    
                                System.out.println("\t Taille de la matrice : " + matriceContoursObjetsImageCapturee.size().width +" X " + matriceContoursObjetsImageCapturee.size().height);
                                System.out.println("\t Aire du contours : " + Imgproc.contourArea(matriceContoursObjetsDossierTisirImage));
                                

                                //On cherche la similarité entre contoursObjetsImageCapturee et contoursObjetsDossierTisirImage
                                double similariteDe2Matrices = Imgproc.matchShapes(matriceContoursObjetsImageCapturee, matriceContoursObjetsDossierTisirImage,Imgproc.CV_CONTOURS_MATCH_I3, 0);
                                if (similariteMin > similariteDe2Matrices){
                                    similariteMin=similariteDe2Matrices;
                                }
                                
                                System.out.println("\t Similarité des matrices : " + cleContourImgCap + " et " + cleContourImgCap + " : \n\t"+ similariteDe2Matrices);
                                System.out.println("\t Similarité minimale : " + similariteMin);
                                System.out.println("\t ----------------");
                                System.out.println();
                            }
                            
                        }
                    }
                }
                
            }
            
            if (similariteMin <= 0.1){
                resultat = "L'objet sur l'image capturée est <br /> <em>RECYCLABLE</em> <br />";
            } else{
                resultat = "L'objet sur l'image capturée est <br /> <em>NON RECYCLABLE</em> <br />";
            }
        }
    }    
    
   
    /*Écriture des données d'images obtenues de différents traitements d'openCV sur disque*/
    private void ecritureDonneesImagesOpenCVdansUnFichierPNG(BufferedImage imageEncours, String nomFichier, String nomDossierDestination){
        File fichierImagePNG = new File(nomDossierDestination + nomFichier );
        try {
            ImageIO.write(imageEncours, "png", fichierImagePNG);
        } catch (IOException ex) {
            Logger.getLogger(ImageObjetForm.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    
    /*Écriture des données d'image capturée de la caméra sur le disque*/
    //http://stackoverflow.com/questions/23979842/convert-base64-string-to-image
    private void ecrireDonneeImageCaptureeSurDisque( String originalData, String dossierimagescapturees) throws IOException{
        //On construit la chaine binaire de chaque image specimen
        String originalDataUtile = originalData.split(",")[1];
        byte[] originalDataEnBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(originalDataUtile);
        System.out.printf("originalDataEnBytes : \n%s%d\n", Arrays.toString(originalDataEnBytes), originalDataEnBytes.length);
        
        try(ByteArrayInputStream byteArray = new ByteArrayInputStream(originalDataEnBytes)){                
               //On crée un buffered Image 
               BufferedImage monImage = ImageIO.read(byteArray);
               File fDonneeImage;
               long id = System.currentTimeMillis();
               fDonneeImage = new File(dossierimagescapturees + "donneeVideoTISIR" +id + ".png");
               ImageIO.write(monImage, "png", fDonneeImage);
        } catch(IOException ioe){
            System.out.printf("ByteArrayInputStream exception : %s\n" , ioe.getLocalizedMessage());
        }
    }
    
    /*Conversion d'un entier en tableau de byte*/
    private byte [] entierEnOctets( int entier ) {
        ByteBuffer tampon = ByteBuffer.allocate(4); 
        tampon.putInt(entier); 
        return tampon.array();
    }
    
    /*Obtenir  la liste des images specimens qui seront stockées dans le tableau files[]*/
    private void listeFichiersD1Dossier(String dir) {
        file = new File(dir);
        files = file.listFiles();
        if (files != null) {
            for (File file1 : files) {
                if (file1.isDirectory() == true) {
                    System.out.printf("Dossier: %s\n", file1.getAbsolutePath());
                } else {
                    System.out.printf("Fichier: %s\n", file1.getName());
                }
            }
        }
    }
    
    /*Valider la données de l'image reçu de la page de recyclabilité*/
    private void validationDonneImage(String paramDonneeImage) throws Exception{
        if (paramDonneeImage!=null){
            if(paramDonneeImage.length()<1000){
                throw new Exception("La donnée constituant l'image doit au moins 1000 caractères numériques.");
            }
        } else{
            throw new Exception("Merci de capturer une image de la vidéo bien avant de demander la vérification.");
        }
    }
    
    private int validationLargeurImage(String paramLargeurImage) throws Exception{
        int largeurImage= -1;
        if (paramLargeurImage != null){
            try {
                largeurImage = Integer.parseInt(paramLargeurImage);
                if (largeurImage<0){
                    throw new Exception("La largeur de l'image capturée doit être un entier positif mais tel n'est pas le cas.");
                }
            } catch (NumberFormatException e) {
                throw new NumberFormatException(e.getMessage());
            }
        } else{
            largeurImage = -1;
            throw new Exception("La largeur de l'image capturée n'est pas un nombre entier.");
        }
        
        return largeurImage;
    }
    
    private int validationHauteurImage(String paramHauteurImage) throws Exception{
        int hauteurImage = -1;
        if (paramHauteurImage != null){
            try {
                //hauteurImage = Integer.parseInt(paramHauteurImage.substring(0, (paramHauteurImage.indexOf("."))));
                hauteurImage = Integer.parseInt(paramHauteurImage);
                if (hauteurImage < 0){
                    throw new Exception("La hauteur de l'image capturée doit être un entier positif mais tel n'est pas le cas.");
                }
            } catch (NumberFormatException e) {
                throw new NumberFormatException(e.getMessage());
            }
        } else{
            hauteurImage = -1;
            throw new Exception("La hauteur de l'image capturée n'est pas un nombre entier.");
        }
        
        return hauteurImage;
    }
    
    /*Ajoute un message correspondant au champ spécifié à la Map erreurs*/
    private void setErreur(String champ, String message){
        erreurs.put(champ, message);
    }
    
    /*Méthode utilitaire qui retourne null si un champ est vide, son contenu sinon */
    private static String getValeurChamp(HttpServletRequest request, String nomChamp){
        String valeur = request.getParameter(nomChamp);
        if (valeur==null || valeur.trim().length()==0){
            return null;
        } else{
            return valeur;
        }
    }
    
}
