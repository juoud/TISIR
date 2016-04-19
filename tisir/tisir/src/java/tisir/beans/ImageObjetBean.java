package tisir.beans;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;
import org.opencv.core.Mat;

@ManagedBean(name="imageObjetBean")
@RequestScoped
public class ImageObjetBean {
    private String donneeImage;
    private String nomImage;
    private Mat matriceDonneeImage;
    private Mat matriceHierarchieDonneeImage;
    private String donneeHierarchieDonneeImage;
    private int largeurImage;
    private int hauteurImage;
    private int largeurImageH;
    private int hauteurImageH;

    public String getDonneeImage() {
        return donneeImage;
    }

    public void setDonneeImage(String donneeImage) {
        this.donneeImage = donneeImage;
    }

    public String getDonneeHierarchieDonneeImage() {
        return donneeHierarchieDonneeImage;
    }

    public void setDonneeHierarchieDonneeImage(String donneeHierarchieDonneeImage) {
        this.donneeHierarchieDonneeImage = donneeHierarchieDonneeImage;
    }

    public String getNomImage() {
        return nomImage;
    }

    public void setNomImage(String nomImage) {
        this.nomImage = nomImage;
    }

    public Mat getMatriceDonneeImage() {
        return matriceDonneeImage;
    }

    public void setMatriceDonneeImage(Mat matriceDonneeImage) {
        this.matriceDonneeImage = matriceDonneeImage;
    }

    public Mat getMatriceHierarchieDonneeImage() {
        return matriceHierarchieDonneeImage;
    }

    public void setMatriceHierarchieDonneeImage(Mat matriceHierarchieDonneeImage) {
        this.matriceHierarchieDonneeImage = matriceHierarchieDonneeImage;
    }

    public int getLargeurImage() {
        return largeurImage;
    }

    public void setLargeurImage(int largeurImage) {
        this.largeurImage = largeurImage;
    }

    public int getHauteurImage() {
        return hauteurImage;
    }

    public void setHauteurImage(int hauteurImage) {
        this.hauteurImage = hauteurImage;
    }

    public int getLargeurImageH() {
        return largeurImageH;
    }

    public void setLargeurImageH(int largeurImageH) {
        this.largeurImageH = largeurImageH;
    }

    public int getHauteurImageH() {
        return hauteurImageH;
    }

    public void setHauteurImageH(int hauteurImageH) {
        this.hauteurImageH = hauteurImageH;
    }
    
    
}
