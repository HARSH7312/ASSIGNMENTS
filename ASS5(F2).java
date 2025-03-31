@WebFilter("/protected/*")
public class AuthFilter implements Filter {
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpSession session = req.getSession(false);

        if (session == null || session.getAttribute("user") == null) {
            ((HttpServletResponse) response).sendRedirect("login.jsp");
        } else {
            chain.doFilter(request, response);
        }
    }
}
