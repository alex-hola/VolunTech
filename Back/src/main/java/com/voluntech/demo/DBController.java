package com.voluntech.demo;

import java.io.IOException;
import java.sql.*;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.text.SimpleDateFormat;
import com.google.gson.Gson;

public class DBController {
    private static final String URL = "jdbc:mysql://localhost/voluntarios";
    private static final String USERNAME = "root";
    // private static final String PASSWORD = "!grVp03-";
    private static final String PASSWORD = "lenovo5";

    String error = "No se ha podido encontrar un usuario";

    public String getOffers() throws SQLException, IOException {
        ResultSet rs = null;
        ArrayList<Oferta> ofertas = new ArrayList<Oferta>();

        try (Connection conn = getConn(); // creo la connexió a la BBDD
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {

            try { // try por si se introduce un carácter no válido

                rs = stmt.executeQuery("SELECT * FROM ofertas WHERE estaAcceptada=0 AND estaTerminada =0");

                while (rs.next()) {
                    Oferta o = new Oferta();

                    o.setParametros((int) rs.getObject(1), (String) rs.getObject(2), (String) rs.getObject(3),
                            (String) rs.getObject(4), (String) rs.getObject(5), (String) rs.getObject(6),
                            (Date) rs.getObject(7), (int) rs.getObject(8), (int) rs.getObject(9));

                    ofertas.add(o);

                }

            } catch (Exception e) {
                System.out.println(String.format("\n¡Cáracter no válido! (%s)", e.getMessage()));
            }

        }
        return new Gson().toJson(ofertas);

    }

    public String getUser(List<String> login) throws SQLException, IOException {

        ResultSet rs = null;
        String email = login.get(0);
        String pass = login.get(1);
        Voluntario volun = new Voluntario();
        Empresa empresa = new Empresa();
        Mentor mentor = new Mentor();
        String retorno = "No data";

        try (Connection conn = getConn(); // creo la connexió a la BBDD
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) { // buida

            System.out.println("segundo try " + email);

            rs = stmt.executeQuery("SELECT * FROM users WHERE email='" + email + "'");

            int numero = 0;
            /*
             * Comprovamos que el rs no es null en caso de que no lo sea entra en la funcion
             */
            if (rs != null) {
                rs.next();

                if (rs.getObject(9) != null) { // este seria para el usario tipo volutario
                    numero = (int) rs.getObject(9);

                    volun.setUser(numero, (String) rs.getObject(2), (String) rs.getObject(3), (String) rs.getObject(4),
                            (String) rs.getObject(5), (String) rs.getObject(6), (String) rs.getObject(7),
                            (String) rs.getObject(8), 1, (int) rs.getObject(1));

                    rs = stmt.executeQuery("SELECT * FROM voluntarios WHERE idVoluntarios=" + numero);

                    rs.next();

                    volun.SetVoluntario((int) rs.getObject(1), (String) rs.getObject(2), (Date) rs.getObject(3), 0);

                    String elJson = new Gson().toJson(volun);

                    System.out.println("elJson" + elJson);

                    retorno = elJson;
                }

                else if (rs.getObject(10) != null) { // este es el usuario empresa

                    numero = (int) rs.getObject(10);

                    empresa.setUser(numero, (String) rs.getObject(2), (String) rs.getObject(3),
                            (String) rs.getObject(4), (String) rs.getObject(5), (String) rs.getObject(6),
                            (String) rs.getObject(7), (String) rs.getObject(8), 2, (int) rs.getObject(1));

                    rs = stmt.executeQuery("SELECT * FROM empresa WHERE idEmpresa=" + numero);

                    rs.next();

                    empresa.setVariables((int) rs.getObject(1), (String) rs.getObject(2), (String) rs.getObject(3),
                            (String) rs.getObject(4));

                    String elJson = new Gson().toJson(empresa);

                    rs.close();

                    retorno = elJson;

                } else if (rs.getObject(11) != null) { // Este es el usuario mentor

                    numero = (int) rs.getObject(11);

                    mentor.setUser(numero, (String) rs.getObject(2), (String) rs.getObject(3), (String) rs.getObject(4),
                            (String) rs.getObject(5), (String) rs.getObject(6), (String) rs.getObject(7),
                            (String) rs.getObject(8), 3, (int) rs.getObject(1));

                    rs = stmt.executeQuery("SELECT * FROM mentores WHERE idMentores = " + numero);

                    rs.next();

                    mentor.SetVariables((int) rs.getObject(1), (String) rs.getObject(2), (Date) rs.getObject(3), 0);

                    String elJSon = new Gson().toJson(mentor);

                    retorno = elJSon;
                }

            } else {
                System.out.println("emailno encontrado");
                retorno = "No RS";
            }

        } catch (Exception e) {
            System.out.println(String.format("\n¡Cáracter no válido! (%s)", e.getMessage()));
        }
        System.out.println(retorno);
        return retorno;
    }

    public String getOfertasUsusario(String string) { // Recoge todas las ofertas que tiene el usuario

        ResultSet rs = null;

        List<Oferta> ofertas = new ArrayList<Oferta>();
        int currentUser = Integer.parseInt(string);
        try (Connection conn = getConn(); // creo la connexió a la BBDD
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) { // buida
            String sql = "SELECT o.* FROM voluntarios_has_ofertas v JOIN ofertas o ON v.ofertas_idofertas = o.idofertas WHERE Voluntarios_idVoluntarios = "
                    + currentUser;
            System.out.println(sql);
            rs = stmt.executeQuery(sql);
            while (rs.next()) {
                System.out.println("Hola estoy aqui!!!");

                Oferta ofertita = new Oferta();
                ofertita.setParametros((int) rs.getObject(1), (String) rs.getObject(2), (String) rs.getObject(3),
                        (String) rs.getObject(4), (String) rs.getObject(5), (String) rs.getObject(6),
                        (Date) rs.getObject(7), (int) rs.getObject(8), (int) rs.getObject(9));
                ofertas.add(ofertita);

            }

        }

        catch (Exception e) {
            System.out.println("He petado " + e.getMessage());
            // TODO: handle exception
        }

        return new Gson().toJson(ofertas);
    }

    public String getOfertasMentores(String id) throws SQLException, IOException { // regresa todas las ofertas para el
                                                                                   // mentor
        String devolucion = new Gson().toJson("No data");
        int idUser = Integer.parseInt(id.toString());

        List<Oferta> ofertas = new ArrayList<Oferta>();
        try (Connection conn = getConn(); // creo la connexió a la BBDD
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) { // (3)

            try {

                ResultSet rs = stmt.executeQuery(
                        "SELECT v.* FROM ofertas v JOIN users o ON v.mentores_idMentores = o.mentores_idMentores WHERE idUsers="
                                + idUser + " AND estaAcceptada=1");

                while (rs.next()) {
                    Oferta o = new Oferta();
                    o.setParametros((int) rs.getObject(1), (String) rs.getObject(2), (String) rs.getObject(3),
                            (String) rs.getObject(4), (String) rs.getObject(5), (String) rs.getObject(6),
                            (Date) rs.getObject(7), (int) rs.getObject(8), (int) rs.getObject(9));
                    ofertas.add(o);

                }
                devolucion = new Gson().toJson(ofertas);

            } catch (Exception e) {
                System.out.println("error: " + e.getMessage());
            }

        }

        return devolucion;
    }

    public String getOfertasEmpresa(String idEmpresa) throws SQLException, IOException {
        String devolucion = new Gson().toJson("No data");

        try (Connection conn = getConn(); // creo la connexió a la BBDD
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {
            List<Oferta> elOfertas = new ArrayList<Oferta>();
            int empresaID = Integer.parseInt(idEmpresa);
            Empresa user = new Empresa();
            ResultSet rs = stmt.executeQuery(
                    "SELECT * FROM users v JOIN empresa o ON v.empresa_idEmpresa = o.idEmpresa WHERE idEmpresa="
                            + empresaID);
            rs.next();
            user.setUser((int) rs.getObject(1), (String) rs.getObject(2), (String) rs.getObject(3),
                    (String) rs.getObject(4), (String) rs.getObject(5), (String) rs.getObject(6),
                    (String) rs.getObject(7), (String) rs.getObject(8), 2, (int) rs.getObject(1));
            // 12
            user.setVariables((int) rs.getObject(12), (String) rs.getObject(13), (String) rs.getObject(14),
                    (String) rs.getObject(15));
            int eempresa = (int) rs.getObject(12);

            System.out.println(eempresa);
            rs = stmt.executeQuery("SELECT * FROM ofertas WHERE empresa_idEmpresa=" + eempresa);
            while (rs.next()) {
                Oferta oferta = new Oferta();

                oferta.setParametros((int) rs.getObject(1), (String) rs.getObject(2), (String) rs.getObject(3),
                        (String) rs.getObject(4), (String) rs.getObject(5), (String) rs.getObject(6),
                        (Date) rs.getObject(7), (int) rs.getObject(8), (int) rs.getObject(9));
                if ((int) rs.getObject(8) == 1) {
                    oferta.setMentorAsignado((int) rs.getObject(10));
                }
                elOfertas.add(oferta);

            }

            devolucion = new Gson().toJson(elOfertas);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }

        return devolucion;
    }

    public String getOfertasValidadas() throws SQLException, IOException {
        String devolucion = new Gson().toJson("No data");
        List<Oferta> lisOffer = new ArrayList<Oferta>();
        try (Connection conn = getConn();
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {
            ResultSet rs = stmt.executeQuery("SELECT * FROM ofertas Where estaAcceptada= 1");
            while (rs.next()) {
                Oferta ofer = new Oferta();
                ofer.setParametros((int) rs.getObject(1), (String) rs.getObject(2), (String) rs.getObject(3),
                        (String) rs.getObject(4), (String) rs.getObject(5), (String) rs.getObject(6),
                        (Date) rs.getObject(7), (int) rs.getObject(8), (int) rs.getObject(9));
                ofer.setMentorAsignado((int) rs.getObject(10));

                lisOffer.add(ofer);
            }

            devolucion = new Gson().toJson(lisOffer);

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
        return devolucion;
    }

    public String getUsuariosEnOferta(String oferta) throws SQLException, IOException {
        String respuesta = "NO DATA";

        try (Connection conn = getConn();
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {
            List<Voluntario> usuariosEnOfertas = new ArrayList<Voluntario>();
            int idOferta = Integer.parseInt(oferta);

            ResultSet rs = stmt.executeQuery(
                    "SELECT o.*,vo.* FROM voluntarios_has_ofertas v JOIN users o ON v.Voluntarios_idVoluntarios = o.voluntarios_idVoluntarios JOIN voluntarios vo ON v.Voluntarios_idVoluntarios = vo.idVoluntarios WHERE ofertas_idofertas ="
                            + idOferta);

            while (rs.next()) {
                // falta por hacer la parte en la que guarda las cosas en los ususarios y falta
                // crear la clase que hace que todo se junte y pueda devolver toda la
                // informacion en formato json ;
                Voluntario user = new Voluntario();
                user.setUser((int) rs.getObject(1), (String) rs.getObject(2), (String) rs.getObject(3),
                        (String) rs.getObject(4), (String) rs.getObject(5), (String) rs.getObject(6),
                        (String) rs.getObject(7), (String) rs.getObject(8), 1, (int) rs.getObject(1));
                // apartir del obj 12 es el apartado de voluntario
                user.SetVoluntario((int) rs.getObject(12), (String) rs.getObject(13), (Date) rs.getObject(14),
                        0) /* el 0 es temporal se puede cambiar por cualquier otro numero */ ;

                usuariosEnOfertas.add(user);

            }

            respuesta = new Gson().toJson(usuariosEnOfertas);

            System.out.println(respuesta);

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
        return respuesta;

    }

    public void putInsertOfertas(List<String> oferta) throws SQLException, IOException {
        try (Connection conn = getConn();
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {
            // hay que hacer el parse que se encargue de pasar todo a las variables y asi
            // para asi poder poner asi en el sql

            int idEmpresa = Integer.parseInt(oferta.get(0).toString());
            String titulo = oferta.get(1);
            String descripcion = oferta.get(2);
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            java.util.Date date = new java.util.Date();
            String vacantes = "0";

            // System.out.println("idEmpresa:"+idEmpresa+", titulo:"+ titulo"+
            // descripcion:"+descripcion+", Fecha:"+formatter.format(date));

            stmt.executeUpdate(
                    "INSERT INTO ofertas(`nombreOferta`, `vacantes`, `descripcion`, `tipoDeTrabajo`, `logo`, `fechaPublicacion`, `estaAcceptada`, `estaTerminada`, `empresa_idEmpresa`) VALUES ('"
                            + titulo + "', '" + vacantes + "', '" + descripcion + "', 'null', 'null', '"
                            + formatter.format(date) + "', '0', '0', '" + idEmpresa + "');"); // se encarga de hacer un
                                                                                              // update al sql pero
                                                                                              // antes necesito los
                                                                                              // datos

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());

        }
    }

    public void modificaOferta(List<String> oferta) throws SQLException, IOException {
        int offer = Integer.parseInt(oferta.get(0).toString());
        String nombreOferta = oferta.get(1);
        String descripcion = oferta.get(2);
        int idUsuario = Integer.parseInt(oferta.get(3).toString());

        System.out.println("oferta: " + offer + " nombreOferta: " + nombreOferta + " descripcion: " + descripcion
                + " idUsuario: " + idUsuario);

        try (Connection conn = getConn();
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {
            ResultSet rs = stmt.executeQuery("SELECT foto FROM users WHERE idUsers = " + idUsuario);
            rs.next();
            String image = (String) rs.getObject(1);

            String sql = "UPDATE ofertas set nombreOferta='" + nombreOferta + "',vacantes='null',descripcion='"
                    + descripcion + "', tipoDeTrabajo='null',logo='" + image + "' WHERE idofertas =" + offer;
            stmt.executeUpdate(sql);

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }

    }

    // Almacena tanto el id de la oferta como el id del mentor ya que es el que
    // accepta la oferta
    public void setValidacion(List<String> variables) throws SQLException, IOException {

        int idOferta = Integer.parseInt(variables.get(0).toString());
        int idMentor = Integer.parseInt(variables.get(1).toString());

        try (Connection conn = getConn();
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {

            System.out.println("Oferta: " + idOferta + " " + "Mentor: " + idMentor);

            String sql = "UPDATE ofertas SET estaAcceptada=1, mentores_idMentores=" + idMentor + " WHERE idofertas="
                    + idOferta;
            stmt.executeUpdate(sql);

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    // no ejecuta
    public void setTermino(int idOferta) throws SQLException, IOException {

        try (Connection conn = getConn();
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {

            String sql = "UPDATE ofertas SET estaTerminada =1 WHERE idofertas=" + idOferta;
            stmt.executeUpdate(sql);

        } catch (Exception e) {
            System.out.println("ERROR: " + e.getMessage());
        }

    }

    public String getMentor(int oferta) {
        String retorno = "NO DATA";
        Mentor mentor = new Mentor();

        try (Connection conn = getConn();
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {
            String sql = "SELECT o.* FROM ofertas v JOIN users o ON v.mentores_idMentores = o.mentores_idMentores WHERE idofertas="
                    + oferta;

            ResultSet rs = stmt.executeQuery(sql);

            rs.next();
            mentor.setUser((int) rs.getObject(1), (String) rs.getObject(2), (String) rs.getObject(3),
                    (String) rs.getObject(4), (String) rs.getObject(5), (String) rs.getObject(6),
                    (String) rs.getObject(7), (String) rs.getObject(8), 3, (int) rs.getObject(1));
            int id = (int) rs.getObject(11);
            rs = stmt.executeQuery("SELECT * FROM mentores WHERE idMentores=" + id);

            rs.next();
            mentor.SetVariables((int) rs.getObject(1), (String) rs.getObject(2), (Date) rs.getObject(3), 0);

            retorno = new Gson().toJson(mentor);

        } catch (Exception e) {
            System.out.println("ERROR: " + e.getMessage());
        }

        return retorno;
    }

    public String getEmpresa(int oferta) throws SQLException, IOException {
        String retorno = "No Data!!";
        Empresa usuario = new Empresa();
        String sql = "SELECT o.* FROM ofertas v JOIN users o ON v.empresa_idEmpresa = o.empresa_idEmpresa WHERE idofertas="
                + oferta;
        try (Connection conn = getConn();
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {

            ResultSet rs = stmt.executeQuery(sql);
            rs.next();
            usuario.setUser((int) rs.getObject(1), (String) rs.getObject(2), (String) rs.getObject(3),
                    (String) rs.getObject(4), (String) rs.getObject(5), (String) rs.getObject(6),
                    (String) rs.getObject(6), (String) rs.getObject(7), 2, (int) rs.getObject(1));
            int user = (int) rs.getObject(10);
            rs = stmt.executeQuery("SELECT * FROM empresa WHERE idEmpresa=" + user);
            rs.next();
            usuario.setVariables((int) rs.getObject(1), (String) rs.getObject(2), (String) rs.getObject(3),
                    (String) rs.getObject(4));
            retorno = new Gson().toJson(usuario);

        } catch (Exception e) {
            System.out.println("ERROR: " + e.getMessage());
        }

        return retorno;
    }

    public void setUserInOferta(List<String> paramentros) throws SQLException, IOException {

        int idVoluntario = Integer.parseInt(paramentros.get(0));
        int idOferta = Integer.parseInt(paramentros.get(1));
        try (Connection conn = getConn();
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {
            stmt.executeUpdate("INSERT INTO voluntarios_has_ofertas VALUES (" + idVoluntario + "," + idOferta + ")");

        } catch (Exception e) {
            System.out.println("ERROR: " + e.getMessage());
        }
    }

    public void deleteUserOferta(List<String> parametros) throws SQLException, IOException {
        
        int idOferta = Integer.parseInt(parametros.get(0));
        int idVoluntario = Integer.parseInt(parametros.get(1));

        try (Connection conn = getConn();
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {
            stmt.executeUpdate("delete from voluntarios_has_ofertas where Voluntarios_idVoluntarios=" + idVoluntario + " AND ofertas_idofertas=" + idOferta);

        } catch (Exception e) {
            System.out.println("ERROR: " + e.getMessage());
        }

        
    }

    public void deleteOferta(int idOferta) throws SQLException, IOException {

        try (Connection conn = getConn();
                Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY)) {
            stmt.executeUpdate("delete from voluntarios_has_ofertas where ofertas_idofertas=" + idOferta);
            stmt.executeUpdate("delete from ofertas where idofertas=" + idOferta);

        } catch (Exception e) {
            System.out.println("ERROR: " + e.getMessage());
        }

        
    }

    public static Connection getConn() throws SQLException {
        DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
        return (Connection) DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }

}

/*
 * 
 * fotos de tipos de voluntarios
 * 
 * 
 */