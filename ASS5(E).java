@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        if ("admin".equals(username) && "1234".equals(password)) {
            request.getRequestDispatcher("welcome.jsp").forward(request, response);
        } else {
            response.sendRedirect("login.jsp?error=Invalid Credentials");
        }
    }
}

