/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tisir.servlets;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.opencv.core.Core;
import org.opencv.core.CvType;
import org.opencv.core.Mat;
import tisir.beans.ImageObjetBean;
import tisir.forms.ImageObjetForm;

/**
 *
 * @author Administrateur
 */
public class ImageObjet extends HttpServlet {
   public static final String PAGEWEB1_STRING = "/recyclability.html";//imageObjet";
   public static final String PAGEWEBRESULTAT_STRING = "/result.jsp"; //"/WEB-INF/result.jsp";
   //public static final String PAGEWEBRESULTAT_STRING = "/resultat"; //"/WEB-INF/result.jsp";
	
   public static final String DOSSIERIMAGESSPECIMEN = "dossierImagesSpecimenTISIR";
   public static final String DOSSIERIMAGESCAPTUREES = "dossierTisirImagesCaptureesTISIR";
   public static final String DOSSIERIMAGESSANSBRUIT = "dossierImagesSpecimenTISIRsansBruit";
   
   public String dossierImagesSpecimenTisir=null;
   public String dossierImagesCaptureesTisir=null;
   public String dossierImagesCaptureesTisirSansBruit=null;
   
   public static final String ATT_IMAGEOBJET = "imageobjet";
   public static final String ATT_IMAGEOBJETFORM="imageobjetForm";
   
   private static final int DEFAULT_BUFFER_SIZE = 10240;
   public static final int TAILLE_TAMPON = 10240; // 10 ko
   
   public File file=null;
   public File[] files = null;
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //Récupération des chemins d'accès aux répertoires des images :
        dossierImagesSpecimenTisir = this.getServletConfig().getInitParameter(DOSSIERIMAGESSPECIMEN);
        //System.out.printf("chemin: %s\n", dossierImagesSpecimenTisir);
        log("Répertoire des images specimen : \n" + dossierImagesSpecimenTisir);
        dossierImagesCaptureesTisir = this.getServletConfig().getInitParameter(DOSSIERIMAGESCAPTUREES);
        log("Répertoire des images capturées depuis la vidéo : \n" + dossierImagesCaptureesTisir);
        dossierImagesCaptureesTisirSansBruit = this.getServletConfig().getInitParameter(DOSSIERIMAGESSANSBRUIT);
        log("Répertoire des images images sans bruit : \n" + dossierImagesCaptureesTisirSansBruit);
        
        log("mon dossier java.library.path : \n" + System.getProperty("java.library.path"));
        
        //listDirectory(chemin);
        
        this.getServletContext().getRequestDispatcher(PAGEWEB1_STRING).forward(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //Chargement de la bibliothèque native openCV
        System.loadLibrary(Core.NATIVE_LIBRARY_NAME);
        
        ImageObjetForm imageobjetForm = new ImageObjetForm();
        
        //Traitement de la requête et récupération du bean en résultant
        Map<String, ImageObjetBean> mapimageobjet = imageobjetForm.verifierDonneeimage(request, dossierImagesSpecimenTisir, dossierImagesCaptureesTisir, dossierImagesCaptureesTisirSansBruit);
        
        /*Stockage du formulaire et du bean dans l'objet requête*/
        request.setAttribute(ATT_IMAGEOBJET, mapimageobjet);
        request.setAttribute(ATT_IMAGEOBJETFORM, imageobjetForm);
        
        
        // response.sendRedirect( request.getContextPath() + PAGEWEBRESULTAT_STRING );
        this.getServletContext().getRequestDispatcher(PAGEWEBRESULTAT_STRING).forward(request, response);
    }
    
}
