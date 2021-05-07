//MEU PRIMEIRO CÓDIGO DE VERDADE

let tela = document.querySelector("canvas");
let pincel= tela.getContext("2d");

//Desenhar quadrado
function desenhaRetangulo(x,y,w,h,color)
{
    pincel.fillStyle = color;
    pincel.fillRect(x,y,w,h); //Obs.: pincel.fillRect(x,y,width,height);
}         

//Desenhar triangulo
function desenhaTriangulo(xa,ya,xb,yb,xc,yc,color)
{
    pincel.fillStyle=color;
    pincel.beginPath();
    pincel.moveTo(xa,ya);
    pincel.lineTo(xb,yb);
    pincel.lineTo(xc,yc);
    pincel.fill();
} 

//Desenha círculo
function desenhaCirculo(x,y,radius,color)
{
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x,y,radius,0,2*Math.PI);
    pincel.fill();
}

function desenhaNuvem(xNuvem,yNuvem)
{
    desenhaCirculo(xNuvem,yNuvem,20,"white");
    desenhaCirculo((xNuvem+40),yNuvem,20,"white");
    desenhaCirculo((xNuvem+80),yNuvem,20,"white");
    desenhaCirculo((xNuvem+20),(yNuvem+10),20,"white");
    desenhaCirculo((xNuvem+20),(yNuvem-10),20,"white");
    desenhaCirculo((xNuvem+60),(yNuvem+10),20,"white");
    desenhaCirculo((xNuvem+60),(yNuvem-10),20,"white");
    desenhaCirculo((xNuvem+40),(yNuvem+20),20,"white");
    desenhaCirculo((xNuvem+40),(yNuvem-20),20,"white");
}

//Ondas
function desenhaOnda(x,y)
    {
        pincel.fillStyle = "blue";
        pincel.beginPath();
        pincel.arc(x,y,20,Math.PI,2*Math.PI);
        pincel.fill();
    }

//Limpar o canvas
function limpaTela(){
    pincel.clearRect(0,0,600,400);
}

//Iniciar TELA INICIAL
function iniciaTelaInicial()
{
    telaInicialSet = setInterval(atualizaTelaInicial,100);
}
//Parar TELA INICIAL
function paraTelaInicial()
{
    clearInterval(telaInicialSet);
}

//TELA INICIAL
function atualizaTelaInicial()
{
    //Limpa a tela inicial antes de desenhar de novo
    limpaTela();

    //Fundo da metade de cima da tela inicial
    desenhaRetangulo(0,0,600,200,"black");

    //Fundo da metade de baixo da tela inicial
    desenhaRetangulo(0,200,600,200,"blue");
    
    //Quadrados para animação de cores
        
        if((xQuad)<601)
        {
            xQuad = xQuad+50;
            //Fila de cima
            desenhaRetangulo(xQuad,yQuad,50,50,colorQuad);
            desenhaRetangulo((xQuad-100),yQuad,50,50,colorQuad);
            desenhaRetangulo((xQuad-200),yQuad,50,50,colorQuad);
            desenhaRetangulo((xQuad-300),yQuad,50,50,colorQuad);
            desenhaRetangulo((xQuad-400),yQuad,50,50,colorQuad);
            desenhaRetangulo((xQuad-500),yQuad,50,50,colorQuad);
            desenhaRetangulo((xQuad-600),yQuad,50,50,colorQuad);
            desenhaRetangulo((xQuad+100),yQuad,50,50,colorQuad);
            desenhaRetangulo((xQuad+200),yQuad,50,50,colorQuad);
            desenhaRetangulo((xQuad+300),yQuad,50,50,colorQuad);
            desenhaRetangulo((xQuad+400),yQuad,50,50,colorQuad);
            desenhaRetangulo((xQuad+500),yQuad,50,50,colorQuad);
            desenhaRetangulo((xQuad+600),yQuad,50,50,colorQuad);
            //Fila de baixo
            desenhaRetangulo(xQuad,(yQuad+100),50,50,colorQuad);
            desenhaRetangulo((xQuad-100),(yQuad+100),50,50,colorQuad);
            desenhaRetangulo((xQuad-200),(yQuad+100),50,50,colorQuad);
            desenhaRetangulo((xQuad-300),(yQuad+100),50,50,colorQuad);
            desenhaRetangulo((xQuad-400),(yQuad+100),50,50,colorQuad);
            desenhaRetangulo((xQuad-500),(yQuad+100),50,50,colorQuad);
            desenhaRetangulo((xQuad-600),(yQuad+100),50,50,colorQuad);
            desenhaRetangulo((xQuad+100),(yQuad+100),50,50,colorQuad);
            desenhaRetangulo((xQuad+200),(yQuad+100),50,50,colorQuad);
            desenhaRetangulo((xQuad+300),(yQuad+100),50,50,colorQuad);
            desenhaRetangulo((xQuad+400),(yQuad+100),50,50,colorQuad);
            desenhaRetangulo((xQuad+500),(yQuad+100),50,50,colorQuad);
            desenhaRetangulo((xQuad+600),(yQuad+100),50,50,colorQuad);
        }
        else
        {
            xQuad=-50;
        }
            
        //Sigla do  jogo
        //Letra S
        desenhaRetangulo(xSigla,ySigla,100,20,"red");
        desenhaRetangulo(xSigla,(ySigla+20),20,40,"red");
        desenhaRetangulo(xSigla,(ySigla+60),100,20,"red");
        desenhaRetangulo((xSigla+80),(ySigla+80),20,40,"red");
        desenhaRetangulo(xSigla,(ySigla+120),100,20,"red");
        //Letra A 
        desenhaRetangulo((xSigla+120),ySigla,100,20,"red");
        desenhaRetangulo((xSigla+120),ySigla,20,140,"red");
        desenhaRetangulo((xSigla+210),ySigla,20,140,"red");
        desenhaRetangulo((xSigla+120),(ySigla+60),100,20,"red");
        
        //Animação na sigla
        //Da frente do A
        desenhaCirculo((xAnimacaoNaSigla+250),(yAnimacaoNaSigla+10),8,'#ade6e6');
        desenhaCirculo((xAnimacaoNaSigla+250),(yAnimacaoNaSigla+40),8,'#ade6e6');
        desenhaCirculo((xAnimacaoNaSigla+250),(yAnimacaoNaSigla+70),8,'#ade6e6');
        //Reinicia na frente do A
        if(xAnimacaoNaSigla<270)
        {
            xAnimacaoNaSigla=xAnimacaoNaSigla+50;
            
        }
        else
        {
            xAnimacaoNaSigla=xSigla;
        }

        //Atrás do S
        desenhaCirculo((xAnimacaoNaSigla1-130),(yAnimacaoNaSigla1+130),8,'#ade6e6');
        //Reinicia atrás do S
        if(xAnimacaoNaSigla1<(260))//Esse 290 é valor de xSigla-30, mais ou ,menos, mas usando a variável o if não pega 
        {   
            xAnimacaoNaSigla1=xAnimacaoNaSigla1+35;
        }
        else
        {
            xAnimacaoNaSigla1=xSigla;
        }

} //Fim da tela inicial

//Iniciar TELA FASE UM
function iniciaTelaFaseUm()
{
    telaFaseUmSet = setInterval(atualizaTelaFaseUm,10);
}

//Parar TELA FASE UM
function paraTelaFaseUm()
{
    clearInterval(telaFaseUmSet);
}

//TELA DA FASE UM
    function atualizaTelaFaseUm(){

        //Altera a variável auxiliar para indicar que tá na fase 1
        auxiliarPlayPause =1;

        //Limpa antes de desenhar tudo de novo
        limpaTela();

        //Pintando o fundo da tela - mar
        pincel.fillStyle = 'blue';
        pincel.fillRect(0,0,600,400);

        //Pintando o fundo d tela - céu
        pincel.fillStyle = '#ade6e6';
        pincel.fillRect(0,0,600,175);

        //Submarino-Foguete --> x=100; y=100;
        desenhaRetangulo(x,y,60,15,"green");
        desenhaTriangulo(x,y,x,(y-13),(x+13),y,"black"); //Triangulo de cima
        desenhaTriangulo(x,(y+15),x,(y+28),(x+13),(y+15)); //Triangulo de baixo
        desenhaTriangulo((x+60),y,(x+80),(y+7.5),(x+60),(y+15)); //Triangulo do meio
        desenhaCirculo((x-3),(y+7.5),7.5,"black"); //Traseira do sub-foguete
        //Jato submarino-foguete --> Foi feito após clicar no botão começar
        desenhaCirculo((xJato1-15),(yJato1+7.5),3,'#ade6e6');
        desenhaCirculo((xJato1-15),(yJato1+1.5),3,'#ade6e6');
        desenhaCirculo((xJato1-15),(yJato1+13.5),3,'#ade6e6');
        //Animação do jato submarino-foguete
        xJato1 = xJato1-5;
        //Reinicia jato submarino-foguete
        if(xJato1<(x-40))
        {
            xJato1 =x;
            yJato1 =y;
        }

        //Inimigo 1 no mar e no espaço
        desenhaRetangulo(xInimigo1,yInimigo1,15,15,"red"); //Quadrado de cima
        desenhaRetangulo((xInimigo1-30),(yInimigo1+15),30,15,"red");
        desenhaRetangulo(xInimigo1,(yInimigo1+30),15,15,"red");
        //Jato - Inimigo
        desenhaCirculo((xJatoInimigo+20),(yJatoInimigo+3),3,'#ade6e6'); //Jato(de cima) do Inimigo
        desenhaCirculo((xJatoInimigo+20),(yJatoInimigo+12),3,'#ade6e6');
        desenhaCirculo((xJatoInimigo+20),(yJatoInimigo+33.5),3,'#ade6e6'); //Jato(de baixo) do Inimigo
        desenhaCirculo((xJatoInimigo+20),(yJatoInimigo+42),3,'#ade6e6');

        //Animaçao horizontal - inimigo 1
        xInimigo1=xInimigo1-5; 
        //Jato do inimigo1
        xJatoInimigo=xJatoInimigo+10;
        if(xJatoInimigo>(xInimigo1+30))
        {       
            xJatoInimigo = xInimigo1;
            yJatoInimigo = yInimigo1;
        }

        //Reinicia a posiçao do inimigo 1
        if(xInimigo1<(-30))
        {    
            clearInterval(10);
            xInimigo1=575;
            xJatoInimigo = xInimigo1;
            yInimigo1 = 200+(Math.floor(Math.random()*130));
            yJatoInimigo = yInimigo1; //Logo atribui o y para o jato do inimigo para acompanhamento
        }

        //Sol
        desenhaCirculo(50,0,100,"yellow");

        //Nuvens
        desenhaNuvem(xNuvem,yNuvem);
        
        //Animação da nuvem
        xNuvem = xNuvem-1;

        //Reinicia posição das nuvens
        if(xNuvem<(-50))
        {
            xNuvem = 650;
            yNuvem = 40+Math.floor(Math.random()*50);
        }

        //Desenha e reinicia as ondas 
        desenhaEReiniciaOnda();
        

        //Verifica o limite do tempo para fazer a transição
        if(simSegundos==10)
        {
            //Para a fase um, limpa e desenha tudo azul - Acabando a fase um
            paraTelaFaseUm(); 
            limpaTela();

            //Altera a variável auxiliar para indicar mudança de tela
            auxiliarPlayPause =0;

            //Faz aparecer a tela de transição
            iniciaTelaTransicao();
        
         }  
    
        //Movimento do submarino-foguete, bala no foguete e jato traseiro
        function moveSubmarinoFoguete(evento){

        if(x>80) 
        {
            if(evento.keyCode==teclaEsquerda) //Movimenta para tras
            {   
                x=x-20;
                xJato1= xJato1-20;
                
            }      
        }

        if(x<510)
        {
            if(evento.keyCode==teclaDireita)//Movimenta para frente
            {
                x=x+20;
                xJato1= xJato1+20;
                
            }
        }

        if(y>220)
        {
            if(evento.keyCode==teclaCima)//Movimenta para cima
            {
                y=y-20;
                yJato1=yJato1-20;
            }
        }

        if(y<360)
        {
            if(evento.keyCode==teclaBaixo)//Movimenta para baixo
            {
                y=y+20;
                yJato1=yJato1+20;
                
            }
        }            
        }
        document.onkeydown = moveSubmarinoFoguete;

} //Fim do function atualizaTelaFaseUm

//Função para desenhar e reiniciar ondas
function desenhaEReiniciaOnda()
        {
                desenhaOnda(10,yOndaPar);
                desenhaOnda(41,yOndaImpar);
                desenhaOnda(70,yOndaPar);
                desenhaOnda(101,yOndaImpar);
                desenhaOnda(130,yOndaPar);
                desenhaOnda(161,yOndaImpar);
                desenhaOnda(190,yOndaPar);
                desenhaOnda(221,yOndaImpar);
                desenhaOnda(250,yOndaPar);
                desenhaOnda(281,yOndaImpar);
                desenhaOnda(310,yOndaPar);
                desenhaOnda(341,yOndaImpar);
                desenhaOnda(370,yOndaPar);
                desenhaOnda(401,yOndaImpar);
                desenhaOnda(430,yOndaPar);
                desenhaOnda(461,yOndaImpar);
                desenhaOnda(490,yOndaPar);
                desenhaOnda(521,yOndaImpar);
                desenhaOnda(550,yOndaPar);
                desenhaOnda(581,yOndaImpar);
                desenhaOnda(610,yOndaPar);

                //Reinicia as ondas
                if(xOnda<0)
                {
                    xOnda = 600;
                }
        }

//Função para animação do x da onda
function animaOnda()
{
            xOnda = xOnda-1;
            if((xOnda%2)==0)
            {
                if(yOndaPar<192)
                {
                    yOndaPar = 193;
                }
                else
                {
                    if(yOndaPar>192)
                    {
                        yOndaPar = 190;
                    }
                }
            }

            if((xOnda%2)>0)
            {
                if(yOndaImpar<192)
                {
                    yOndaImpar = 193;
                }
                else
                {
                    if(yOndaImpar>192)
                    {
                        yOndaImpar = 190;
                    }
                }
            }
} 

//Inicia a animação da onda
function iniciaAnimacaoOnda()
{
     animacaoOndaSet = setInterval(animaOnda,130);
}

//Para a animação da onda
function paraAnimacaoOnda()
{
     clearInterval(animacaoOndaSet);
}

//TRANSIÇÃO DA FASE UM PARA FASE DOIS

//Inicia TELA DE TRANSIÇÃO
function iniciaTelaTransicao()
{
    telaTransicaoSet = setInterval(telaTransicao,10);
}

//Para TELA DE TRANSIÇÃO
function paraTelaTransicao()
{
    clearInterval(telaTransicaoSet);
} 

//TELA DE TRANSIÇÃO
function telaTransicao()
{

    //Para a tela fase um
    paraTelaFaseUm();
    
    //Altera a variável auxiliar para indicar que tá na transição
    auxiliarPlayPause = 2;

    if(simSegundos>(9))
    {
        desenhaRetangulo(0,0,600,400,"blue");   
    }

    if(simSegundos>10)
        {
            limpaTela();

            //Mudança das variáveis        
            x=292.5;y=280;
            //Fundo geral
            //let yCeu=0;    
            desenhaRetangulo(0,0,600,400,'black');//Espaço
            desenhaCirculo(300,(yFinalCeu-20),600,"grey");//Transição céu-espaço
            desenhaCirculo(300,yFinalCeu,600,'#ade6e6');//Final céu
            desenhaRetangulo(0,yCeu,600,400,'#ade6e6');//Céu
            desenhaRetangulo(0,yAgua,600,300,"blue");//Água
            //Nuvem
            desenhaNuvem(xNuvemTransicao,yNuvemTransicao);//Nuvem da esquerda
            desenhaNuvem((xNuvemTransicao+200),yNuvemTransicao);//Nuvem da direita

            //Submarino-Foguete na Vertical --> x=292.5;y=280;
            desenhaRetangulo(x,y,15,60,"green");
            desenhaTriangulo(x,(y+60),(x-13),(y+60),(x),(y+47),colorTraseiraFoguete); //Triangulo da esquerda
            desenhaTriangulo((x+15),(y+60),(x+28),(y+59),(x+15),(y+46),colorTraseiraFoguete); //Triangulo da direita
            desenhaTriangulo(x,y,(x+7.5),(y-15),(x+15),(y),colorPontaFoguete); //Triangulo do meio
            desenhaCirculo((x+7.5),(y+63),7.5,colorTraseiraFoguete); //Traseira do sub-foguete
            //Jato submarino-foguete --> Foi feito após clicar no botão começar
            desenhaCirculo((xJato1+7.5),(yJato1+75.5),3,colorJato1);
            desenhaCirculo((xJato1+1.5),(yJato1+75.5),3,colorJato1);
            desenhaCirculo((xJato1+13.5),(yJato1+75.5),3,colorJato1);
            //Animação do jato submarino-foguete na vertical
            yJato1 = yJato1+5;
            //Reinicia jato submarino-foguete na vertical
            if(yJato1>(y+40))
            {
                xJato1 =x;
                yJato1 =y;
            }
        }
            //Mudança das variáveis        
            //x=292.5;y=280;

            //Verificações para as animações da transição - Obs.: 13 vem do tempo da telaFaseUm junto com a tela toda azul para suavizar a transição
            if(simSegundos>(15+3))//Muda a cor do jato quando sai da água
            {
                colorJato1 = "red";
            }

            if(simSegundos<(15+20))//Desce a água para a animação
            {
                yAgua=yAgua+0.5;                   
            }

            if(simSegundos>(13+15))//Desce o céu para a animação
            {
                yCeu = yCeu+0.5;
                yFinalCeu = yFinalCeu+0.5;
            }

            if(simSegundos>(13+29))//Muda a cor da ponta quando vai para o espaço
            {
                colorPontaFoguete = "red";
            }
            if(simSegundos>(13+30))//Muda a acor da traseira e do jato quando vai para o espaço
            {
                colorTraseiraFoguete = "red";
                colorJato1 = "yellow";
            }
            
            if(simSegundos<(13+20)) // Animação da nuvem sumindo e aparecendo
            {
                yNuvemTransicao=yNuvemTransicao+0.5; 
                if(yNuvemTransicao>400)
                {   
                    yNuvemTransicao=(-10);
                    xNuvemTransicao = Math.floor(Math.random()*200);
                }
            }
            else
            {
                yNuvemTransicao=yNuvemTransicao+0.5; 
                if(yNuvemTransicao>400)
                {
                    yNuvemTransicao=500;
                }
                        
            }

            //Muda da tela de transição para tela fase dois   
            if(simSegundos>47)
            {
                //Para tela transição
                paraTelaTransicao();

                //Altera a variável auxiliar para mudança de tela
                //auxiliarPlayPause = 0; // PQ NÃO PEGOU O PAUSAR NA FASE 2?

                //Limpa tela e inicia tela fase dois
                limpaTela();
                iniciaTelaFaseDois();
            }


}//Fim da função da tela de transição

//TELA FASE DOIS

//inicia fase dois
function iniciaTelaFaseDois()
{
    telaFaseDoisSet = setInterval(telaFaseDois,10);
}


//Para fase dois
function paraTelaDaFaseDois()
{
    clearInterval(telaFaseDois);
}

//Tela fase dois
function telaFaseDois()
{

    //Para a tela de transição
    paraTelaTransicao();
  
    //Altera a variável auxiliar para indicar que tá na fase dois
    auxiliarPlayPause =3;

    //Mudança de variáveis
    x=xFogueteFaseDois; y=yFogueteFaseDois;

    //Código da tela fase dois

    //Fundo preto do espaço
    desenhaRetangulo(0,0,600,400,"black");

    //Meteoros
    desenhaCirculo(xMeteoro1,yMeteoro1,50,"brown");//Meteoro 1
    desenhaCirculo(xMeteoro2,yMeteoro2,50,"brown"); //Meteoro 2
    desenhaCirculo(xMeteoro3,yMeteoro3,50,"brown"); //Meteoro 3

    //Animação do meteoro 1 e 2 - Movimenta e reinicia
    if(yMeteoro1<450)
    {
        yMeteoro1=yMeteoro1+2; //Movimenta meteoro 1
        yMeteoro2 =yMeteoro2+2; //Movimenta meteoro 2
        yMeteoro3 =yMeteoro3+3; //Movimenta meteoro 3


    }
    else
    {
        //Reinicia meteoro 1
        xMeteoro1 = Math.floor(Math.random()*500);
        yMeteoro1=(-50); 

        //Reinicia meteoro 2
        xMeteoro2 = Math.floor(Math.random()*500);
        yMeteoro2 =(-150);

        //Reinicia meteoro 3
        xMeteoro3 = Math.floor(Math.random()*500);
        yMeteoro3 =(-200);

    }

    //Submarino-Foguete na Vertical --> x=292.5;y=280;
    desenhaRetangulo(x,y,15,60,"green");
    desenhaTriangulo(x,(y+60),(x-13),(y+60),(x),(y+47),"red"); //Triangulo da esquerda
    desenhaTriangulo((x+15),(y+60),(x+28),(y+59),(x+15),(y+46),"red"); //Triangulo da direita
    desenhaTriangulo(x,y,(x+7.5),(y-15),(x+15),(y),"red"); //Triangulo do meio
    desenhaCirculo((x+7.5),(y+63),7.5,"red"); //Traseira do sub-foguete
    //Jato submarino-foguete --> Foi feito após clicar no botão começar
    desenhaCirculo((xJato1+7.5),(yJato1+75.5),3,"yellow");
    desenhaCirculo((xJato1+1.5),(yJato1+75.5),3,"yellow");
    desenhaCirculo((xJato1+13.5),(yJato1+75.5),3,"yellow");
    //Animação do jato submarino-foguete na vertical
    yJato1 = yJato1+5;
    //Reinicia jato submarino-foguete na vertical
    if(yJato1>(y+40))
    {
        xJato1 =x;
        yJato1 =y;
    }
        
    //Movimento do submarino-foguete, bala no foguete e jato traseiro -FASE DOIS
    function moveSubmarinoFoguete(evento){

    if(xFogueteFaseDois>50) 
    {
        if(evento.keyCode==teclaEsquerda) //Movimenta para tras
        {   
            xFogueteFaseDois=xFogueteFaseDois-20;
            xJato1= xJato1-20;
            
        }      
    }

    if(xFogueteFaseDois<550)
    {
        if(evento.keyCode==teclaDireita)//Movimenta para frente
        {
            xFogueteFaseDois=xFogueteFaseDois+20;
            xJato1= xJato1+20;
            
        }
    }

    if(yFogueteFaseDois>20)
    {
        if(evento.keyCode==teclaCima)//Movimenta para cima
        {
            yFogueteFaseDois=yFogueteFaseDois-20;
            yJato1=yJato1-20;
        }
    }

    if(yFogueteFaseDois<300)
    {
        if(evento.keyCode==teclaBaixo)//Movimenta para baixo
        {
            yFogueteFaseDois=yFogueteFaseDois+20;
            yJato1=yJato1+20;
            
        }
    }            
    }
    document.onkeydown = moveSubmarinoFoguete;

    //Fim da fase dois
    if(simSegundos>60)
    {
        //Altera a variável auxiliar para indicar mudança de tela
        auxiliarPlayPause = 0;

        //Para as outras telas
        paraTelaInicial();
        paraTelaFaseUm();
        paraTelaDaFaseDois();
        paraSimulaSegundos();
        
       
        //Limpa a tela fase 2
        limpaTela();

        //Exibe tela final
        iniciaTelaFinal();

    }

}//Fim da fase dois

//TELA FINAL
//Iniciar TELA FINAL
function iniciaTelaFinal()
{
    telaFinalSet = setInterval(atualizaTelaFinal,100);
}
//Parar TELA FINAL
function paraTelaFinal()
{
    clearInterval(telaFinalSet);
}

//Tela final
function atualizaTelaFinal()
{
    //Para a tela fase dois
    paraTelaDaFaseDois();
    
    //Limpa a tela inicial antes de desenhar de novo
    limpaTela();

    //Fundo da metade de cima da tela inicial
    desenhaRetangulo(0,0,600,200,"black");

    //Fundo da metade de baixo da tela inicial
    desenhaRetangulo(0,200,600,200,"blue");
    
    //Quadrados para decoração da tela final
    
    for(i=25;i<600;i=i+100)
    {
        desenhaRetangulo(i,yQuad,50,50,colorQuad);
        desenhaRetangulo(i,(yQuad+100),50,50,colorQuad);
    }
       
        //Mudança de variável
        xSigla = 125;

        //Sigla do  jogo
        //Letra F
        desenhaRetangulo(xSigla,ySigla,100,20,"red");//-
        desenhaRetangulo(xSigla,(ySigla+20),20,120,"red");// |
        desenhaRetangulo(xSigla,(ySigla+60),100,20,"red");//_
        
        //Letra I
        desenhaRetangulo((xSigla+130),(ySigla+30),20,110,"red");
        desenhaCirculo((xSigla+140),(ySigla+10),10,"red");

        //Letra M 
        desenhaRetangulo((xSigla+180),(ySigla+30),130,20,"red"); //Parte de cima
        desenhaRetangulo((xSigla+180),(ySigla+30),20,110,"red"); //Perna esquerda
        desenhaRetangulo((xSigla+300),(ySigla+30),20,110,"red"); //Perna direita
        desenhaRetangulo((xSigla+240),(ySigla+30),20,110,"red");//Perna do meio

        //Ponto de exclamação
        desenhaCirculo((xSigla+350),(ySigla+130),10,"red");
        desenhaRetangulo((xSigla+340),(ySigla+0),20,110,"red");
        

} //Fim da tela final

//SIMULANDO A CONTAGEM DE SEGUNDOS
//Inicia simulação de segundos
function iniciaSimulaSegundos()
{
    simulacaoSegundosSet = setInterval(function(){
                simSegundos++;
                console.log(simSegundos);
    },1000);
}
//Para simulação de segundos
function paraSimulaSegundos()
{
        clearInterval(simulacaoSegundosSet);
}


//VARIÁVEIS PARA TELA INICIAL E FINAL
//Variáveis para funções iniciar e parar setInterval da tela inicial
let telaInicialSet;
//Animação dos quadrados
let xQuad = -50; let yQuad=225; let auxQuad =0; 
let colorQuad = '#ade6e6'; 
//Coordenadas das siglas
let xSigla = 185; let ySigla=25;
//Coordenadas das animações na sigla
let xAnimacaoNaSigla = xSigla; let yAnimacaoNaSigla = ySigla;
let xAnimacaoNaSigla1 = xSigla; let yAnimacaoNaSigla1 = ySigla;
//Tela final
let telaFinalSet;

//VARIÁVEIS PARA TELA FASE UM
//Variáveis para funções iniciar e parar setInterval da tela fase um
let telaFaseUmSet;
//Variável para o setInterval da animação da onda
let animacaoOndaSet;
//Submarino-Foguete
let x =0 ; let y= 0; // Coordenadas iniciais de submarino-foguete - na horizontal
let xJato1 =0 ; let yJato1 = 0; //Coordenadas iniciais do jato1(do meio) submarino-foguete na horizontal
//let xVertical =100; let yVertical=100;
//Inimigo
let xInimigo1 = 0; let yInimigo1 =0; //200+(Math.floor(Math.random()*200));//Cordeenadas iniciais dos inimigos
let xJatoInimigo = xInimigo1; let yJatoInimigo=yInimigo1;
//Ondas
let xOnda =600; let yOndaPar=190; let yOndaImpar =193; //Coordenadas das ondas
//Nuvem
let xNuvem = 500; let yNuvem = 50; //Coordenadas da nuvem

//VARIÁVEIS DA TRANSIÇÃO
//Variável para o setInterval da tela de transição
let telaTransicaoSet;
//Simulação de segundos
let simSegundos = 0; //Apenas enquanto a lógica do erro não é feita
//Variável para o setInterval da simulação de segundos
let simulacaoSegundosSet;
//Coordenadas do cenário do mar
let xAgua = 0; let yAgua=185;
//Água escorrendo x=292.5;y=280 - na transição
let xAguaEscorrendo = 292.5; let yAguaEscorrendo = 280;
//Cor da ponta e traseira do foguete
let colorTraseiraFoguete = "black"; let colorPontaFoguete="black";
//Cor do jato
let colorJato1 ='#ade6e6';
//Coordenada y do céu 
let yCeu=0; let yFinalCeu =200;
//Nuvens da transição
let xNuvemTransicao=Math.floor(Math.random()*200); let yNuvemTransicao = 50;

//VARIÁVEIS DA TELA FASE DOIS
//SetInterval para tela fase dois
let telaFaseDoisSet;
//Coordenadas iniciais do foguete na fase dois
let xFogueteFaseDois=292.5; let yFogueteFaseDois=280;
//Coordendas iniciais dos meteoros
let xMeteoro1 = Math.floor(Math.random()*400); let yMeteoro1 =(-50);
let xMeteoro2 = Math.floor(Math.random()*400); let yMeteoro2 =(-150);
let xMeteoro3=Math.floor(Math.random()*400); let yMeteoro3=(-200);

//OUTRAS VARIÁVEIS
//Teclado
let teclaEspaco = 32;
let teclaEsquerda = 37;
let teclaCima = 38;
let teclaDireita = 39;
let teclaBaixo = 40;
//Pega botão começar
let botaoComecar = document.querySelector(".btn-comecar");
//Pega botão encerrar
let botaoPausar = document.querySelector(".btn-pausar");
//Pegar botão retomar
let botaoRetomar = document.querySelector(".btn-retomar");
//Pega botão reset
let botaoReset = document.querySelector(".btn-reset");
//Variável auxiliar para ajudar na pausa e retomada das telas
let auxiliarPlayPause =0;

//TELA INICIAL
iniciaTelaInicial();

//INICIA A TELA FASE UM  E DÁ SEGUIMENTO ÀS OUTRAS - Dá o play
botaoComecar.addEventListener('click',function(){

    //Para o setInterval da tela inicial e limpa tela
    paraTelaInicial();
    limpaTela();
    
    //Mudança de valores das variáveis
    x=50; y=300; xInimigo1=620; yInimigo1=250; xJato1 =x; yJato1=y;
     
    //Atualiza a tela da fase um
    if(x>=0)
    {
         iniciaTelaFaseUm();
         //iniciaTelaTransicao(); //Apenas para teste
         //iniciaTelaFaseDois();//Apenas para teste
         //iniciaTelaFinal();//Apenas para teste
    }  

    //Inicia a animação da onda
    iniciaAnimacaoOnda();
        
    //Inicia a simulação de segundos
    iniciaSimulaSegundos();

}); //Fim do listener do botão começar 

//Pausa o jogo
botaoPausar.addEventListener('click',function(){
        
        if(auxiliarPlayPause==1)
        {
            //Pausa a tela fase um
            paraTelaFaseUm();

            //Pausa a simulação da simulação do segundos
            paraSimulaSegundos();
        }

        if(auxiliarPlayPause==2)
        {
            //Pausa a tela de transição
            paraTelaTransicao();

            //Pausa a simulação da simulação do segundos
            paraSimulaSegundos();
        }

        if(auxiliarPlayPause==3)
        {
            //Pausa a tela fase dois
            paraTelaDaFaseDois(); //NÃO SEI PQ NÃO ESTÁ PAUSANDO NA FASE DOIS!!!!

            //Pausa a simulação da simulação do segundos
            paraSimulaSegundos();
        }        
});

//Retomar o jogo para sair do pause
botaoRetomar.addEventListener('click',function(){

    if(auxiliarPlayPause==1)
    {
        //Retoma a tela fase um
        iniciaTelaFaseUm();

        //Retoma a simulação dos segundos
        iniciaSimulaSegundos();
    }

    if(auxiliarPlayPause==2)
    {
        //Retoma a tela de transição
        iniciaTelaTransicao();

        //Retoma a simulação dos segundos
        iniciaSimulaSegundos();
    }

    if(auxiliarPlayPause==3)
    {
        //Retoma a tela fase dois
        iniciaTelaFaseDois();

        //Retoma a simulação dos segundos
        iniciaSimulaSegundos();
    }     
});

//Reinicia todo o jogo recarregando a página
botaoReset.addEventListener('click',function(){
        
        document.location.reload(); //Recarrega a página
        
});