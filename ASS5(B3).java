@WebServlet("/clientInfo")
public class ClientInfoServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        
        String ip = request.getRemoteAddr();
        String userAgent = request.getHeader("User-Agent");

        out.println("<h2>Client IP: " + ip + "</h2>");
        out.println("<h2>Browser: " + userAgent + "</h2>");
    }
}
