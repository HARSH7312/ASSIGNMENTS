@WebServlet("/setCookie")
public class CookieServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Cookie cookie = new Cookie("username", "JohnDoe");
        cookie.setMaxAge(60 * 60); // 1 hour
        response.addCookie(cookie);
        response.getWriter().println("Cookie set!");
    }
}
