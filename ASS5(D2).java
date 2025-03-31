@WebServlet("/urlRewrite")
public class URLRewriteServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String url = response.encodeURL("welcome?user=JohnDoe");
        response.getWriter().println("<a href='" + url + "'>Click Here</a>");
    }
}

