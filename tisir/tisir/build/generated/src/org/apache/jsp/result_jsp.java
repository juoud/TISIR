package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class result_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\r\n");
      out.write("\r\n");
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/>\r\n");
      out.write("    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n");
      out.write("    <title>Résultat de vérification de votre objet</title>\r\n");
      out.write("    <link href=\"Scripts/jquery.mobile-1.4.5/jquery.mobile-1.4.5.css\" rel=\"stylesheet\" />\r\n");
      out.write("    <!--link rel=\"stylesheet\" href=\"http:/\\/code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css\" /-->\r\n");
      out.write("\r\n");
      out.write("    <script src=\"Scripts/jquery-2.2.0.min.js\"></script>\r\n");
      out.write("    <!--script src=\"http:\\//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js\"></script-->\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("    <script src=\"Scripts/commonLibrary.js\"></script>\r\n");
      out.write("    <script src=\"Scripts/configurationMobileTISISRrecyclage.js\"></script>\r\n");
      out.write("    <script src=\"Scripts/result.js\"></script>\r\n");
      out.write("    \r\n");
      out.write("    <!--link href=\"CSS/default.css\" rel=\"stylesheet\" /-->\r\n");
      out.write("    \r\n");
      out.write("    <script src=\"Scripts/jquery.mobile-1.4.5/jquery.mobile-1.4.5.min.js\"></script>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\t<div data-role=\"page\" id=\"result\">\r\n");
      out.write("        <div id=\"main\">\r\n");
      out.write("            <div data-role=\"header\" id=\"header1\" data-position=\"fixed\">\r\n");
      out.write("                <div data-role=\"navbar\">\r\n");
      out.write("                    <ul>\r\n");
      out.write("                        <li id=\"lHome\"><a id=\"defaultPage\" data-icon=\"home\">Accueil</a></li>\r\n");
      out.write("                        <li id=\"lRecyclability\"><a id=\"recyclabPage\" class=\"ui-btn-active ui-state-persist\" data-icon=\"recycle\">Recyclabilité</a></li>\r\n");
      out.write("                        <li id=\"lAboutTisir\"><a id=\"aboutPage\" data-icon=\"info\">?</a></li>\r\n");
      out.write("                    </ul>\r\n");
      out.write("                </div>\r\n");
      out.write("                <h2>Résultat de la vérification de l'objet</h2>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div data-role=\"content\">\r\n");
      out.write("                <form>\r\n");
      out.write("\t\t            <ul id=\"listResult\" data-role=\"listview\" data-inset=\"true\">\r\n");
      out.write("\t\t\t            <li id=\"lican1\"><div class=\"ui-block-a\">\r\n");
      out.write("\t                    <p id=\"message\" style=\"color:green; margin-left:auto; margin-right:auto; z-index:5000; pointer-events:none;\">Recyclable | Non recyclable</p>\r\n");
      out.write("\t                    </div></li> \r\n");
      out.write("\t\t            \t<li id=\"lican1\"><div class=\"ui-block-b\">\r\n");
      out.write("\t\t                    <canvas id=\"can1\" class=\"audiovisuelle\"  style=\"margin-left:auto; margin-right:auto; z-index:5000; pointer-events:none;\"></canvas>\r\n");
      out.write("\t\t                </div></li>\r\n");
      out.write("\t\t                <li id=\"lican2\"><div class=\"ui-block-c\">\r\n");
      out.write("\t                    <canvas id=\"can2\" class=\"audiovisuelle\"  style=\"margin-left:auto; margin-right:auto; z-index:5000; pointer-events:none;\"></canvas>\r\n");
      out.write("\t                </div></li>\r\n");
      out.write("\t\t            </ul> <br />\r\n");
      out.write("\t           \r\n");
      out.write("\t\t            <div data-role=\"fieldContain\">\r\n");
      out.write("\t\t\t          <div class=\"ui-grid-a\">\r\n");
      out.write("\t\t\t                <div id=\"divBack1\" class=\"ui-block-a\" style=\"width:26%; margin-left:auto; margin-right:auto;\">\r\n");
      out.write("\t\t\t                    <input id=\"back1\" type=\"button\" data-icon=\"back\" data-add-back-btn=\"true\" data-rel=\"back\" value=\"Précédent\" style=\"border:outset; z-index:9999;\" />\r\n");
      out.write("\t\t\t                </div>\r\n");
      out.write("\t\t\t                <div class=\"ui-block-b\" id=\"divSaveResult\" style=\"width:73%; margin-left:auto; margin-right:auto;\">\r\n");
      out.write("\t\t\t                    <input id=\"nouvelle\" type=\"button\" data-icon=\"refresh\" class=\"ui-btn-active\" value=\"Nouvelle vérification\" style=\"border:outset; background-color:green; color:white; z-index:9999;\" />\r\n");
      out.write("\t\t\t               </div>\r\n");
      out.write("\t\t\t          </div>\r\n");
      out.write("\t\t\t       </div>\r\n");
      out.write("\t           </form>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div data-role=\"footer\" data-position=\"fixed\">\r\n");
      out.write("                <em>Copyright <abbr title=\"Web Tool for Information and Sorting Instructions of Recyclables\">TISIR</abbr> &copy; DoBatI-ÉTS 2016</em>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("</body>\r\n");
      out.write("</html>");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
