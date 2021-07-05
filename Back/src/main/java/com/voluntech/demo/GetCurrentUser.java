package com.voluntech.demo;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.sql.SQLException;
//import java.sql.SQLException;
import java.util.Enumeration;
import java.util.List;
import java.util.ArrayList;

public class GetCurrentUser extends HttpServlet {
    private static final long serialVersionUID = 1L;
    DBController DB = new DBController();
    String elemento = null;
    String[] value = null;
    List<String> login = new ArrayList<String>();

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Enumeration<String> enumeration = request.getParameterNames();
        response.setHeader("Content-Type", "application/json; charset=UTF-8");
        setAccessControlHeaders(response);
        login.clear();
        try {
            while (enumeration.hasMoreElements()) {
                elemento = (String) enumeration.nextElement();

                value = request.getParameterValues(elemento);

                login.add(value[0]);
            }

            String user = DB.getUser(login);
            PrintWriter out = response.getWriter();
            out.print(user);
            out.flush();
        } catch (SQLException e) {
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
    



    

    

