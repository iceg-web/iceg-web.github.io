Tema = "";
congeloTema = false;
congeloj = false;
congeloe = false;
congeloh = false;
temaSi = 0;
jSi = 0;
hSi = 0;
eSi = 0;

function tema() {
	if (temaSi == 0) {
		document.getElementById("tema").style.color = "blue";
		congeloTema = true;
		temaSi = 1;
	}
	else if (temaSi == 1) {
		document.getElementById("tema").style.color = "black";
		congeloTema = false;
		temaSi = 0;
	}
	
}

function jugabilidad() {
	if (jSi == 0) {
		document.getElementById("jugabilidad").style.color = "blue";
		congeloj = true;
		jSi = 1;
	}
	else if (jSi == 1) {
		document.getElementById("jugabilidad").style.color = "black";
		congeloj = false;
		jSi = 0;
	}
	
}

function historia() {
	if (hSi == 0) {
		document.getElementById("historia").style.color = "blue";
		congeloh = true;
		hSi = 1;
	}
	else if (hSi == 1) {
		document.getElementById("historia").style.color = "black";
		congeloh = false;
		hSi = 0;
	}
	
}

function escenario() {
	if (eSi == 0) {
		document.getElementById("escenario").style.color = "blue";
		congeloe = true;
		eSi = 1;
	}
	else if (eSi == 1) {
		document.getElementById("escenario").style.color = "black";
		congeloe = false;
		eSi = 0;
	}
	
}

function azar() {
	let NumeroAleatorioTema = 1 + Math. floor (Math. random()*100);
	
	if (NumeroAleatorioTema == 1)        // TEMAAAAAAA
        {
            Tema = "Drama";
        }
    else if (NumeroAleatorioTema == 2)
        {
            Tema = "Accion";
        }
   	else if (NumeroAleatorioTema == 3)
        {
            Tema = "Misterio";
        }
        else if (NumeroAleatorioTema == 4)
        {
            Tema = "Amor";
        }
        else if (NumeroAleatorioTema == 5)
        {
            Tema = "Ambicion";
        }
        else if (NumeroAleatorioTema == 6)
        {
            Tema = "Aprendizaje";
        }
        else if (NumeroAleatorioTema == 7)
        {
            Tema = "Arte";
        }
        else if (NumeroAleatorioTema == 8)
        {
            Tema = "Atracción";
        }
        else if (NumeroAleatorioTema == 9)
        {
            Tema = "Belleza";
        }
        else if (NumeroAleatorioTema == 10)
        {
            Tema = "Bondad versus maldad";
        }
        else if (NumeroAleatorioTema == 11)
        {
            Tema = "Capitalismo";
        }
        else if (NumeroAleatorioTema == 12)
        {
            Tema = "Casualidad";
        }
        else if (NumeroAleatorioTema == 13)
        {
            Tema = "Celos";
        }
        else if (NumeroAleatorioTema == 14)
        {
            Tema = "Cine";
        }
        else if (NumeroAleatorioTema == 15)
        {
            Tema = "Círculo de la vida";
        }
        else if (NumeroAleatorioTema == 16)
        {
            Tema = "Compañerismo";
        }
        else if (NumeroAleatorioTema == 17)
        {
            Tema = "Comunicación verbal";
        }
        else if (NumeroAleatorioTema == 18)
        {
            Tema = "Comunicación no verbal";
        }
        else if (NumeroAleatorioTema == 19)
        {
            Tema = "Consumismo";
        }
        else if (NumeroAleatorioTema == 21)
        {
            Tema = "Corrupción";
        }
        else if (NumeroAleatorioTema == 22)
        {
            Tema = "Dependencia";
        }
        else if (NumeroAleatorioTema == 23)
        {
            Tema = "Desencanto";
        }
        else if (NumeroAleatorioTema == 24)
        {
            Tema = "Destino";
        }
        else if (NumeroAleatorioTema == 25)
        {
            Tema = "Deterioro";
        }
        else if (NumeroAleatorioTema == 26)
        {
            Tema = "Dolor";
        }
        else if (NumeroAleatorioTema == 27)
        {
            Tema = "Egoísmo";
        }
        else if (NumeroAleatorioTema == 28)
        {
            Tema = "Egoísmo";
        }
        else if (NumeroAleatorioTema == 29)
        {
            Tema = "Envejecimiento";
        }
        else if (NumeroAleatorioTema == 30)
        {
            Tema = "Erotismo";
        }
        else if (NumeroAleatorioTema == 31)
        {
            Tema = "Escritura";
        }
        else if (NumeroAleatorioTema == 32)
        {
            Tema = "Esperanza";
        }
        else if (NumeroAleatorioTema == 33)
        {
            Tema = "Eternidad"; 
        }
        else if (NumeroAleatorioTema == 34)
        {
            Tema = "Fama";
        }
        else if (NumeroAleatorioTema == 35)
        {
            Tema = "Familia";
        }
        else if (NumeroAleatorioTema == 36)
        {
            Tema = "Fe";
        }
        else if (NumeroAleatorioTema == 37)
        {
            Tema = "Fotografía";
        }
        else if (NumeroAleatorioTema == 38)
        {
            Tema = "Fuerza";
        }
        else if (NumeroAleatorioTema == 39)
        {
            Tema = "Drama";
        }
        else if (NumeroAleatorioTema == 40)
        {
            Tema = "Fracaso";
        }
        else if (NumeroAleatorioTema == 41)
        {
            Tema = "Gratitud";
        }
        else if (NumeroAleatorioTema == 42)
        {
            Tema = "Guerra";
        }
        else if (NumeroAleatorioTema == 43)
        {
            Tema = "Heroísmo";
        }
        else if (NumeroAleatorioTema == 44)
        {
            Tema = "Hipocresía";
        }
        else if (NumeroAleatorioTema == 45)
        {
            Tema = "Ignorancia versus conocimiento";
        }
        else if (NumeroAleatorioTema == 46)
        {
            Tema = "Imaginación";
        }
        else if (NumeroAleatorioTema == 47)
        {
            Tema = "Incertidumbre";
        }
        else if (NumeroAleatorioTema == 48)
        {
            Tema = "Infancia";
        }
        else if (NumeroAleatorioTema == 49)
        {
            Tema = "Infidelidad";
        }
        else if (NumeroAleatorioTema == 50)
        {
            Tema = "Injusticia";
        }
        else if (NumeroAleatorioTema == 51)
        {
            Tema = "Inmortalidad";
        }
        else if (NumeroAleatorioTema == 52)
        {
            Tema = "Inteligencia artificial";
        }
        else if (NumeroAleatorioTema == 53)
        {
            Tema = "Interés";
        }
        else if (NumeroAleatorioTema == 54)
        {
            Tema = "Ira";
        }
        else if (NumeroAleatorioTema == 55)
        {
            Tema = "Jerarquía empresarial";
        }
        else if (NumeroAleatorioTema == 56)
        {
            Tema = "Juventud";
        }
        else if (NumeroAleatorioTema == 57)
        {
            Tema = "Luz versus oscuridad";
        }
        else if (NumeroAleatorioTema == 58)
        {
            Tema = "Madurez";
        }
        else if (NumeroAleatorioTema == 59)
        {
            Tema = "Manipulación";
        }
        else if (NumeroAleatorioTema == 60)
        {
            Tema = "Materialismo";
        }
        else if (NumeroAleatorioTema == 61)
        {
            Tema = "Maternidad";
        }
        else if (NumeroAleatorioTema == 62)
        {
            Tema = "Mentira";
        }
        else if (NumeroAleatorioTema == 63)
        {
            Tema = "Miedo";
        }
        else if (NumeroAleatorioTema == 64)
        {
            Tema = "Minimalismo";
        }
        else if (NumeroAleatorioTema == 65)
        {
            Tema = "Muerte";
        }
        else if (NumeroAleatorioTema == 66)
        {
            Tema = "Música";
        }
        else if (NumeroAleatorioTema == 67)
        {
            Tema = "Nacionalismo";
        }
        else if (NumeroAleatorioTema == 68)
        {
            Tema = "Narcisismo";
        }
        else if (NumeroAleatorioTema == 69)
        {
            Tema = "Naturaleza versus tecnología";
        }
        else if (NumeroAleatorioTema == 70)
        {
            Tema = "Necesidad de libertad";
        }
        else if (NumeroAleatorioTema == 71)
        {
            Tema = "Nostalgia";
        }
        else if (NumeroAleatorioTema == 72)
        {
            Tema = "Odio";
        }
        else if (NumeroAleatorioTema == 73)
        {
            Tema = "Opresión";
        }
        else if (NumeroAleatorioTema == 74)
        {
            Tema = "Optimismo";
        }
        else if (NumeroAleatorioTema == 75)
        {
            Tema = "Orden versus caos";
        }
        else if (NumeroAleatorioTema == 76)
        {
            Tema = "Orgullo";
        }
        else if (NumeroAleatorioTema == 77)
        {
            Tema = "Paternidad";
        }
        else if (NumeroAleatorioTema == 78)
        {
            Tema = "Peligro";
        }
        else if (NumeroAleatorioTema == 79)
        {
            Tema = "Pérdida de la inocencia";
        }
        else if (NumeroAleatorioTema == 80)
        {
            Tema = "Perseverancia";
        }
        else if (NumeroAleatorioTema == 81)
        {
            Tema = "Pesimismo";
        }
        else if (NumeroAleatorioTema == 82)
        {
            Tema = "Pintura";
        }
        else if (NumeroAleatorioTema == 83)
        {
            Tema = "Poder";
        }
        else if (NumeroAleatorioTema == 84)
        {
            Tema = "Volverse adulto";
        }
        else if (NumeroAleatorioTema == 85)
        {
            Tema = "Rebeldía";
        }
        else if (NumeroAleatorioTema == 86)
        {
            Tema = "Sacrificio";
        }
        else if (NumeroAleatorioTema == 87)
        {
            Tema = "Seducción";
        }
        else if (NumeroAleatorioTema == 88)
        {
            Tema = "Soledad";
        }
        else if (NumeroAleatorioTema == 89)
        {
            Tema = "Superación";
        }
        else if (NumeroAleatorioTema == 90)
        {
            Tema = "Superficialidad";
        }
        else if (NumeroAleatorioTema == 91)
        {
            Tema = "Supervivencia";
        }
        else if (NumeroAleatorioTema == 92)
        {
            Tema = "Tentación";
        }
        else if (NumeroAleatorioTema == 93)
        {
            Tema = "Tiempo";
        }
        else if (NumeroAleatorioTema == 94)
        {
            Tema = "Trabajo";
        }
        else if (NumeroAleatorioTema == 95)
        {
            Tema = "Tradición versus cambio";
        }
        else if (NumeroAleatorioTema == 96)
        {
            Tema = "Traición";
        }
        else if (NumeroAleatorioTema == 97)
        {
            Tema = "Unidad versus separación";
        }
        else if (NumeroAleatorioTema == 98)
        {
            Tema = "Vanidad";
        }
        else if (NumeroAleatorioTema == 99)
        {
            Tema = "Verdad";
        }
        else if (NumeroAleatorioTema == 100)
        {
            Tema = "Venganza";
        }
    let NumeroAleatorioHistoria = 1 + Math. floor (Math. random()*7);
    if (NumeroAleatorioHistoria == 1)  //HISTORIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        {
            Historia = "El heroe tiene que vencer a un monstruo o amenaza";
        }
        else if (NumeroAleatorioHistoria == 2)
        {
            Historia = "El heroe tiene que pasar de pobreza a riqueza o encontrar su propia riqueza";
        }
        else if (NumeroAleatorioHistoria == 3)
        {
            Historia = "El heroe y sus amigos se enbarcan en una aventura para conseguir una recompensa";
        }
        else if (NumeroAleatorioHistoria == 4)
        {
            Historia = "El heroe se adentra a un mundo desconocido para despues volver mas sabio";
        }
        else if (NumeroAleatorioHistoria == 5)
        {
            Historia = "El heroe comete errores que acaba pagando";
        }
        else if (NumeroAleatorioHistoria == 6)
        {
            Historia = "El heroe es atrapado por alguien con mas poder y al liberarse algo dentro de el se transforma y es mejor persona";
        }
        else if (NumeroAleatorioHistoria == 7)
        {
            Historia = "EL heroe intenta descubrir la verdad";
        }
    let NumeroAleatorioTresD = 1 + Math. floor (Math. random()*2);
     if (NumeroAleatorioTresD == 1) //3ddddddddddddddddddddddddddd
        {
            tresD = "2d";
        }
        else
        {
            tresD = "3d";
        }
    let NumeroAleatorioJugabilidad = 1 + Math. floor (Math. random()*20);
    if (NumeroAleatorioJugabilidad == 1) //JUGABILIDADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
        {
            Jugabilidad = "Puzzle";
        }
        else if (NumeroAleatorioJugabilidad == 2)
        {
            Jugabilidad = "Acción";
        }
        else if (NumeroAleatorioJugabilidad == 3)
        {
            Jugabilidad = "Aventura";
        }
        else if (NumeroAleatorioJugabilidad == 4)
        {
            Jugabilidad = "Arcade";
        }
        else if (NumeroAleatorioJugabilidad == 5)
        {
            Jugabilidad = "Estrategia";
        }
        else if (NumeroAleatorioJugabilidad == 6)
        {
            Jugabilidad = "Simulacion";
        }
        else if (NumeroAleatorioJugabilidad == 7)
        {
            Jugabilidad = "Cartas";
        }
        else if (NumeroAleatorioJugabilidad == 8)
        {
            Jugabilidad = "Musical";
        }
        else if (NumeroAleatorioJugabilidad == 9)
        {
            Jugabilidad = "Deportes";
        }
        else if (NumeroAleatorioJugabilidad == 10)
        {
            Jugabilidad = "Shooter";
        }
        else if (NumeroAleatorioJugabilidad == 11)
        {
            Jugabilidad = "RPG";
        }
        else if (NumeroAleatorioJugabilidad == 12)
        {
            Jugabilidad = "Rol";
        }
        else if (NumeroAleatorioJugabilidad == 13)
        {
            Jugabilidad = "Plataformas";
        }
        else if (NumeroAleatorioJugabilidad == 14)
        {
            Jugabilidad = "Cooperativo";
        }
        else if (NumeroAleatorioJugabilidad == 15)
        {
            Jugabilidad = "Supervivencia";
        }
        else if (NumeroAleatorioJugabilidad == 16)
        {
            Jugabilidad = "MMO";
        }
        else if (NumeroAleatorioJugabilidad == 17)
        {
            Jugabilidad = "Online";
        }
        else if (NumeroAleatorioJugabilidad == 18)
        {
            Jugabilidad = "Preguntas y respuestas";
        }
        else if (NumeroAleatorioJugabilidad == 19)
        {
            Jugabilidad = "Mundo abierto";
        }
        else if (NumeroAleatorioJugabilidad == 20)
        {
            Jugabilidad = "Lineal";
        }
    let NumeroAleatorioEscenario = 1 + Math. floor (Math. random()*20);
    if (NumeroAleatorioEscenario == 1) //ESCENARIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
        {
            Escenario = "utopía";
        }

        else if (NumeroAleatorioEscenario == 2)
        {
            Escenario = "distopía";
        }
        else if (NumeroAleatorioEscenario == 3)
        {
            Escenario = "Edad media";
        }
        else if (NumeroAleatorioEscenario == 4)
        {
            Escenario = "futuro";
        }
        else if (NumeroAleatorioEscenario == 5)
        {
            Escenario = "Europa actual";
        }
        else if (NumeroAleatorioEscenario == 6)
        {
            Escenario = "Norte america actual";
        }
        else if (NumeroAleatorioEscenario == 7)
        {
            Escenario = "Revolucion francesa";
        }
        else if (NumeroAleatorioEscenario == 8)
        {
            Escenario = "Revolucion industrial";
        }
        else if (NumeroAleatorioEscenario == 9)
        {
            Escenario = "Revolucion industrial 2";
        }
        else if (NumeroAleatorioEscenario == 10)
        {
            Escenario = "Epoca pirata";
        }
        else if (NumeroAleatorioEscenario == 11)
        {
            Escenario = "Epoca romana";
        }
        else if (NumeroAleatorioEscenario == 12)
        {
            Escenario = "Renacimiento";
        }
        else if (NumeroAleatorioEscenario == 13)
        {
            Escenario = "Revolucion rusa";
        }
        else if (NumeroAleatorioEscenario == 14)
        {
            Escenario = "Primera guerra mundial";
        }
        else if (NumeroAleatorioEscenario == 15)
        {
            Escenario = "Segunda guerra mundial";
        }
        else if (NumeroAleatorioEscenario == 16)
        {
            Escenario = "Imperio español";
        }
        else if (NumeroAleatorioEscenario == 17)
        {
            Escenario = "Guerra fría";
        }
        else if (NumeroAleatorioEscenario == 18)
        {
            Escenario = "Siglo 21";
        }
        else if (NumeroAleatorioEscenario == 19)
        {
            Escenario = "Mitologia griega";
        }
        else if (NumeroAleatorioEscenario == 20)
        {
            Escenario = "Mitologia nordica";
        }
    if (congeloTema == false) {
    	document.getElementById("tema").innerHTML = " " + Tema;
    }
	if (congeloe == false) {
		document.getElementById("escenario").innerHTML = " " + Escenario;
	}
	if (congeloj == false) {
		document.getElementById("jugabilidad").innerHTML = " " + Jugabilidad + ", " + tresD;
	}
	if (congeloh == false) {
		document.getElementById("historia").innerHTML = " " + Historia;
	}
	
	
	
}