<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "mauricio"; $contrasenia = "1234"; $nombreBaseDatos = "bd_torneo";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);


// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultar"])){
    // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM torneo WHERE id_torneo=".$_GET["consultar"]);
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM torneo_futbol WHERE id_torneo=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["consultar_usuario"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM usuario WHERE id_usuario=".$_GET["consultar_usuario"]);
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["consultar_torneo_basquetbol"])){
    // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM torneo WHERE id_torneo=".$_GET["consultar"]);
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM torneo_basquetbol WHERE id_torneo=".$_GET["consultar_torneo_basquetbol"]);
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
// -------------------------------------------------------------------------------------------------
if (isset($_GET["consultar_futbol"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM equipo_futbol WHERE id_equipo=".$_GET["consultar_futbol"]);
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["consultar_basquetbol"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM equipo_basquetbol WHERE id_equipo=".$_GET["consultar_basquetbol"]);
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["consultar_partido_futbol"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_futbol WHERE id_partido=".$_GET["consultar_partido_futbol"]);
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["consultar_partido_basquetbol"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_basquetbol WHERE id_partido=".$_GET["consultar_partido_basquetbol"]);
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["equiposMasPartidos"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT equipo1 , COUNT(id_partido) AS partidos FROM partido_futbol GROUP BY equipo1 ORDER BY COUNT(id_partido) DESC LIMIT 5");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["equiposMasPartidosVisitante"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT equipo2 , COUNT(id_partido) AS partidos FROM partido_futbol GROUP BY equipo2 ORDER BY COUNT(id_partido) DESC LIMIT 5");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["equiposMenosPartidos"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT equipo1 , COUNT(id_partido) AS partidos FROM partido_futbol GROUP BY equipo1 ORDER BY COUNT(id_partido) ASC LIMIT 5");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["equiposMenosPartidosVisitante"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT equipo2 , COUNT(id_partido) AS partidos FROM partido_futbol GROUP BY equipo2 ORDER BY COUNT(id_partido) ASC LIMIT 5");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["equiposMasPartidosBasquetbol"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT equipo1 , COUNT(id_partido) AS partidos FROM partido_basquetbol GROUP BY equipo1 ORDER BY COUNT(id_partido) DESC LIMIT 5");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["equiposMasPartidosBasquetbolVisitante"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT equipo2 , COUNT(id_partido) AS partidos FROM partido_basquetbol GROUP BY equipo2 ORDER BY COUNT(id_partido) DESC LIMIT 5");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

// ---------------------------------------------------------------------------------------------------------
//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["borrar"])){
    // $sqlEmpleaados = mysqli_query($conexionBD,"DELETE FROM torneo WHERE id_torneo=".$_GET["borrar"]);
    $sqlEmpleaados = mysqli_query($conexionBD,"DELETE FROM torneo_futbol WHERE id_torneo=".$_GET["borrar"]);
    if($sqlEmpleaados){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["borrar_usuario"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"DELETE FROM usuario WHERE id_usuario=".$_GET["borrar_usuario"]);
    if($sqlEmpleaados){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["borrar_torneo_basquetbol"])){
    // $sqlEmpleaados = mysqli_query($conexionBD,"DELETE FROM torneo WHERE id_torneo=".$_GET["borrar"]);
    $sqlEmpleaados = mysqli_query($conexionBD,"DELETE FROM torneo_basquetbol WHERE id_torneo=".$_GET["borrar_torneo_basquetbol"]);
    if($sqlEmpleaados){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["borrar_futbol"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"DELETE FROM equipo_futbol WHERE id_equipo=".$_GET["borrar_futbol"]);
    if($sqlEmpleaados){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}



if (isset($_GET["borrar_basquetbol"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"DELETE FROM equipo_basquetbol WHERE id_equipo=".$_GET["borrar_basquetbol"]);
    if($sqlEmpleaados){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["borrar_partido_futbol"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"DELETE FROM partido_futbol WHERE id_partido=".$_GET["borrar_partido_futbol"]);
    if($sqlEmpleaados){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["borrar_partido_basquetbol"])){
    $sqlEmpleaados = mysqli_query($conexionBD,"DELETE FROM partido_basquetbol WHERE id_partido=".$_GET["borrar_partido_basquetbol"]);
    if($sqlEmpleaados){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//Inserta un nuevo registro y recepciona en método post los datos de nombre y correo
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $pais=$data->pais;
    $tipo_torneo=$data->tipo_torneo;
        if(($pais!="")&&($nombre!="")){
            if($tipo_torneo=="Futbol"){
                $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO torneo_futbol(nombre,pais) VALUES('$nombre','$pais') ");
                echo json_encode(["success"=>1]);
            }else if($tipo_torneo=="Basquetbol"){
                $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO torneo_basquetbol(nombre,pais) VALUES('$nombre','$pais') ");
                echo json_encode(["success"=>1]);
            }
        }
    exit();
}

// if(isset($_GET["insertar"])){
//     $data = json_decode(file_get_contents("php://input"));
//     $nombre=$data->nombre;
//     $pais=$data->pais;
//     $tipo_torneo=$data->tipo_torneo;
//         if(($pais!="")&&($nombre!="")){
            
//     $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO torneo(nombre,pais,tipo_torneo) VALUES('$nombre','$pais','$tipo_torneo') ");
//     echo json_encode(["success"=>1]);
//         }
//     exit();
// }

if(isset($_GET["insertar_partido_futbol"])){
    $data = json_decode(file_get_contents("php://input"));
    $equipo1=$data->equipo1;
    $equipo2=$data->equipo2;
    $horario=$data->horario;
    $estadio=$data->estadio;
    $lugar=$data->lugar;
    $torneo=$data->torneo;
        if(($equipo1!=$equipo2)){
            
    $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO partido_futbol(equipo1,equipo2,horario,estadio,lugar,torneo) VALUES('$equipo1','$equipo2','$horario','$estadio','$lugar','$torneo') ");
    echo json_encode(["success"=>1]);
        }
    exit();
}

if(isset($_GET["insertar_partido_basquetbol"])){
    $data = json_decode(file_get_contents("php://input"));
    $equipo1=$data->equipo1;
    $equipo2=$data->equipo2;
    $horario=$data->horario;
    $estadio=$data->estadio;
    $lugar=$data->lugar;
    $torneo=$data->torneo;
        if(($equipo1!=$equipo2)){
            
    $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO partido_basquetbol(equipo1,equipo2,horario,estadio,lugar,torneo) VALUES('$equipo1','$equipo2','$horario','$estadio','$lugar','$torneo') ");
    echo json_encode(["success"=>1]);
        }
    exit();
}

if(isset($_GET["insertarEquipo"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $pais=$data->pais;
    $torneo=$data->torneo;
        if(($pais!="")&&($nombre!="")){
            
                $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO equipo_futbol(nombre,pais,torneo) VALUES('$nombre','$pais','$torneo') ");
                echo json_encode(["success"=>1]);
                        
            
        }
    exit();
}

if(isset($_GET["insertar_equipo_basquetbol"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $pais=$data->pais;
    $torneo=$data->torneo;
    
        if(($pais!="")&&($nombre!="")){            
                $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO equipo_basquetbol(nombre,pais,torneo) VALUES('$nombre','$pais','$torneo') ");
                echo json_encode(["success"=>1]);
            
            
        }
    exit();
}

if(isset($_GET["insertarUsuario"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $correo=$data->correo;
    $contrasena=$data->contrasena;
    $tipo_usuario=$data->tipo_usuario;
    
        if(($contrasena!="")&&($correo!="")){            
                $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO usuario(nombre,correo,contrasena,tipo) VALUES('$nombre','$correo','$contrasena','$tipo_usuario') ");
                // echo json_encode(["success"=>1]);  
                if($sqlEmpleaados!=""){
                    $resp='OK';
                    $mesaje='Usuario registrado con exito';

                }
                else{
                    $resp='FAIL';
                    $mesaje='Correo ya registrado';
        
        
                }
                                    
        }
        $response = ['resultado' => $resp, 'mesaje' => $mesaje] ;

        // $response->mensaje = 'ERROR';
    
    
        //         header('Content-Type: application/json');
    
        echo json_encode($response); // MUESTRA EL JSON GENERADO  
        exit();
}

if(isset($_GET["insertarUsuario2"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $correo=$data->correo;
    $contrasena=$data->contrasena;
    $tipo_usuario=$data->tipo_usuario;
    
        if(($contrasena!="")&&($correo!="")){            
                $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO usuario(nombre,correo,contrasena,tipo) VALUES('$nombre','$correo','$contrasena','$tipo_usuario') ");
                // echo json_encode(["success"=>1]);  
                if($sqlEmpleaados!=""){
                    $resp='OK';
                    $mesaje='Usuario registrado con exito';

                }
                else{
                    $resp='FAIL';
                    $mesaje='Correo ya registrado';
        
        
                }
                                    
        }
        $response = ['resultado' => $resp, 'mesaje' => $mesaje] ;

        // $response->mensaje = 'ERROR';
    
    
        //         header('Content-Type: application/json');
    
        echo json_encode($response); // MUESTRA EL JSON GENERADO  
        exit();
}

// Actualiza datos pero recepciona datos de nombre, correo y una clave para realizar la actualización
if(isset($_GET["actualizar"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar"];
    $nombre=$data->nombre;
    $pais=$data->pais; 
    // $tipo_torneo=$data->tipo_torneo;
    
    // $sqlEmpleaados = mysqli_query($conexionBD,"UPDATE torneo SET nombre='$nombre',pais='$pais',tipo_torneo='$tipo_torneo' WHERE id_torneo='$id'");
    $sqlEmpleaados = mysqli_query($conexionBD,"UPDATE torneo_futbol SET nombre='$nombre',pais='$pais' WHERE id_torneo='$id'");
    echo json_encode(["success"=>1]);
    exit();
}

if(isset($_GET["actualizar_torneo_basquetbol"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar_torneo_basquetbol"];
    $nombre=$data->nombre;
    $pais=$data->pais; 
    // $tipo_torneo=$data->tipo_torneo;
    
    // $sqlEmpleaados = mysqli_query($conexionBD,"UPDATE torneo SET nombre='$nombre',pais='$pais',tipo_torneo='$tipo_torneo' WHERE id_torneo='$id'");
    $sqlEmpleaados = mysqli_query($conexionBD,"UPDATE torneo_basquetbol SET nombre='$nombre',pais='$pais' WHERE id_torneo='$id'");
    echo json_encode(["success"=>1]);
    exit();
}

if(isset($_GET["actualizar_usuario"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar_usuario"];
    $nombre=$data->nombre;
    $correo=$data->correo;     
    $contrasena=$data->contrasena;
    $tipo=$data->tipo;

    $sqlEmpleaados = mysqli_query($conexionBD,"UPDATE usuario SET nombre='$nombre',correo='$correo' ,contrasena='$contrasena',tipo='$tipo' WHERE id_usuario='$id'");
    echo json_encode(["success"=>1]);
    exit();
}

if(isset($_GET["actualizar_futbol"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar_futbol"];
    $nombre=$data->nombre;
    $pais=$data->pais;     
    $torneo=$data->torneo;

    $sqlEmpleaados = mysqli_query($conexionBD,"UPDATE equipo_futbol SET nombre='$nombre',pais='$pais' ,torneo='$torneo' WHERE id_equipo='$id'");
    echo json_encode(["success"=>1]);
    exit();
}

if(isset($_GET["actualizar_basquetbol"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar_basquetbol"];
    $nombre=$data->nombre;
    $pais=$data->pais;     
    $torneo=$data->torneo;

    $sqlEmpleaados = mysqli_query($conexionBD,"UPDATE equipo_basquetbol SET nombre='$nombre',pais='$pais' ,torneo='$torneo' WHERE id_equipo='$id'");
    echo json_encode(["success"=>1]);
    exit();
}

if(isset($_GET["actualizar_partido_futbol"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar_partido_futbol"];
    $equipo1=$data->equipo1;
    $equipo2=$data->equipo2;
    $horario=$data->horario;
    $estadio=$data->estadio;
    $lugar=$data->lugar;
    $torneo=$data->torneo;  
    $goles_local=$data->goles_local;
    $goles_visitante=$data->goles_visitante;
    
    $sqlEmpleaados = mysqli_query($conexionBD,"UPDATE partido_futbol SET equipo1='$equipo1',equipo2='$equipo2',horario='$horario',estadio='$estadio',lugar='$lugar',torneo='$torneo',goles_local=$goles_local,goles_visitante=$goles_visitante WHERE id_partido='$id'");
    echo json_encode(["success"=>1]);
    exit();
}

if(isset($_GET["actualizar_partido_basquetbol"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar_partido_basquetbol"];
    $equipo1=$data->equipo1;
    $equipo2=$data->equipo2;
    $horario=$data->horario;
    $estadio=$data->estadio;
    $lugar=$data->lugar;
    $torneo=$data->torneo;  
    $puntos_local=$data->puntos_local;
    $puntos_visitante=$data->puntos_visitante;
    
    $sqlEmpleaados = mysqli_query($conexionBD,"UPDATE partido_basquetbol SET equipo1='$equipo1',equipo2='$equipo2',horario='$horario',estadio='$estadio',lugar='$lugar',torneo='$torneo',puntos_local='$puntos_local',puntos_visitante='$puntos_visitante' WHERE id_partido='$id'");
    echo json_encode(["success"=>1]);
    exit();
}

if(isset($_GET["consultar_usuarios"])){
    
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM usuario ");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
    }
    else{ echo json_encode([["success"=>0]]); }
    exit();
}


if(isset($_GET["equipo_futbol"])){
    
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM equipo_futbol ");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
    }
    else{ echo json_encode([["success"=>0]]); }
    exit();
}

if (isset($_GET["equipo_futbol_torneo"])){
    // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_futbol");
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM equipo_futbol WHERE torneo='".$_GET["equipo_futbol_torneo"]."'");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if(isset($_GET["partidos_futbol"])){
    
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_futbol");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
    }
    else{ echo json_encode([["success"=>0]]); }
    exit();
}

if(isset($_GET["tablaClasificacion"])){
    
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM tabla_clasificacion");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
    }
    else{ echo json_encode([["success"=>0]]); }
    exit();
}

if(isset($_GET["proximos_partidos_futbol"])){
    
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_futbol WHERE horario between now() and '".$_GET["proximos_partidos_futbol"]."'");
    
    // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_futbol WHERE horario between now() and '2021-12-4 01:20:00'");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
    }
    else{ echo json_encode([["success"=>0]]); }
    exit();
}

if(isset($_GET["proximos_partidos_basquetbol"])){
    
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_basquetbol WHERE horario between now() and '".$_GET["proximos_partidos_basquetbol"]."'");
    // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_basquetbol WHERE horario between now() and '2021-12-04 01:20:00'");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
    }
    else{ echo json_encode([["success"=>0]]); }
    exit();
}

// if(isset($_GET["partidos_futbol_torneo"])){
        
    // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_futbol WHERE torneo=".$_GET["partidos_futbol_torneo"]);
//     // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_futbol WHERE torneo='$torneo'");
//     // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_futbol");
//     if(mysqli_num_rows($sqlEmpleaados) > 0){
//         $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
//         echo json_encode($empleaados);
//         exit();
//     }
//     else{ echo json_encode(["success"=>0]); }
    
// }
if (isset($_GET["partidos_futbol_torneo"])){
    // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_futbol");
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_futbol WHERE torneo='".$_GET["partidos_futbol_torneo"]."'");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["partidos_basquetbol_torneo"])){
    // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_basquetbol");
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_basquetbol WHERE torneo='".$_GET["partidos_basquetbol_torneo"]."'");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["partidos_futbol_equipo"])){
    // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_futbol");
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_futbol WHERE equipo1='".$_GET["partidos_futbol_equipo"]. "' OR equipo2='".$_GET["partidos_futbol_equipo"]."'");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["partidos_basquetbol_equipo"])){
    // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_futbol");
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_basquetbol WHERE equipo1='".$_GET["partidos_basquetbol_equipo"]. "' OR equipo2='".$_GET["partidos_basquetbol_equipo"]."'");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}


if(isset($_GET["partidos_basquetbol"])){
    
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_basquetbol");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
    }
    else{ echo json_encode([["success"=>0]]); }
    exit();
}


if(isset($_GET["torneo_futbol"])){
    
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM torneo_futbol");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
    }
    else{ echo json_encode([["success"=>0]]); }
    exit();
}

if(isset($_GET["torneo_basquetbol"])){
    
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM torneo_basquetbol");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
    }
    else{ echo json_encode([["success"=>0]]); }
    exit();
}

if(isset($_GET["equipo_basquetbol"])){
    
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM equipo_basquetbol ");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
    }
    else{ echo json_encode([["success"=>0]]); }
    exit();
}

if (isset($_GET["equipo_basquetbol_torneo"])){
    // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_futbol");
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM equipo_basquetbol WHERE torneo='".$_GET["equipo_basquetbol_torneo"]."'");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if (isset($_GET["fecha_final"])){
    // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM partido_futbol");
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT DATE_ADD(now(), interval 3 day) as fecha_final");
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

if(isset($_GET["login_user"])){  
   
    $usuario=$_GET['user'];
    $contrasena=$_GET['pas']; 
   
    $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM usuario WHERE correo='".$usuario."' AND contrasena='".$contrasena."'");
    // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM usuario WHERE usuario='".$_GET["login_user"].usuario."' AND contrasena='".$_GET["login_user"].contrasena."'");            
    // $sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM usuario WHERE usuario='robles' AND contrasena='1234'"); 
    if(mysqli_num_rows($sqlEmpleaados) > 0){
        $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
        // $response->resultado = 'OK';
        $resp="OK";
        $mesaje="ACCEDIO";
        
    }else{ 
        $empleaados="";
        $resp="FAIL";
        $mesaje="ERROR";
        
        // $response = ['resultado' => $resp, 'mesaje' => $mesaje  ] ; 
        // echo json_encode(["success"=>0]);
        // $response->resultado = 'FAIL';
        // echo json_encode($response);
     }
    //  'datos' =>$empleaados
     $response = ['resultado' => $resp, 'mesaje' => $mesaje,'datos' =>$empleaados] ;
        echo json_encode($response);
        // echo json_encode($empleaados);
        exit();
                       
}

if(isset($_GET["login"])){
    // $json = file_get_contents('php://input'); // RECIBE EL JSON DE ANGULAR
    $params = json_decode(file_get_contents("php://input"));
    // $params = json_decode($json); // DECODIFICA EL JSON Y LO GUARADA EN LA VARIABLE  
  // REALIZA LA QUERY A LA DB
    $resultado = mysqli_query($conexionBD, "SELECT * FROM usuarios WHERE usuario='$params->usuario' AND contrasena='$params->contrasena'");
    // $resultado = mysqli_query($conexionBD,"SELECT * FROM usuario WHERE usuario='robles' AND contrasena='1234'"); 
 
    class Result {}
    
    // GENERA LOS DATOS DE RESPUESTA
    $response = new Result();
    
    if($resultado->num_rows > 0) {
        $response->resultado = 'OK';
        $response->mensaje = 'LOGIN EXITOSO';
    } else {
        $response->resultado = 'FAIL';
        $response->mensaje = 'LOGIN FALLIDO';
    }
    
    header('Content-Type: application/json');
    
    echo json_encode($response); // MUESTRA EL JSON GENERADO
}

// Consulta todos los registros de la tabla empleados
$sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM torneo_futbol ");
if(mysqli_num_rows($sqlEmpleaados) > 0){
    $empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
    echo json_encode($empleaados);    
}
else{ echo json_encode([["success"=>0]]); }


?>
