@WebServlet("/getUserDetails")
public class UserDetailsServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        String name = request.getParameter("name");
        out.println("<h2>Hello, " + name + "!</h2>");
    }
}

