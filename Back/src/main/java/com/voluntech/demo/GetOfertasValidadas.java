package com.voluntech.demo;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class GetOfertasValidadas extends HttpServlet {
    DBController DB = new DBController();

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        setAccessControlHeaders(response);
        response.setHeader("Content-Type", "application/json; charset=UTF-8");

        try {

            String user = DB.getOfertasValidadas();

            PrintWriter out = response.getWriter();
            out.print(user);
            out.flush();

        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }
    @Override
    protected void doOptions(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        setAccessControlHeaders(resp);
        resp.setStatus(HttpServletResponse.SC_OK);
    }
    private void setAccessControlHeaders(HttpServletResponse resp) {
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "GET");
    }
}
