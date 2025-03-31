import org.json.JSONObject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/LoginServletAJAX")
public class LoginServletAJAX extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        JSONObject json = new JSONObject();
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        if ("admin".equals(username) && "1234".equals(password)) {
            HttpSession session = request.getSession();
            session.setAttribute("user", username);
            json.put("status", "success");
            json.put("message", "Login successful!");
        } else {
            json.put("status", "error");
            json.put("message", "Invalid credentials.");
        }
        out.print(json);
        out.flush();
    }
}

