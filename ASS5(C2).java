@WebServlet("/contextExample")
public class ContextServlet extends HttpServlet {
    public void init() {
        getServletContext().setAttribute("appName", "My Web App");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String appName = (String) getServletContext().getAttribute("appName");
        response.getWriter().println("Application Name: " + appName);
    }
}

