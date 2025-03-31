@WebServlet("/sessionExample")
public class SessionServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession();
        session.setAttribute("theme", "dark");
        response.getWriter().println("Session set!");
    }
}
