var list=
        [
            [1,"MULOT Cyrille",3],[2,"AMIOT Antoine",2],[3,"BRUNET Xavier",36],
            [4,"FONTENAY Karine",1],[5,"PRIVAT Nicolas",61],[6,"KAMINSKI Stephan",98],
            [7,"GARDENT Thierry",51],[8,"HENNENFENT Roland",17],[9,"BENOIT Philippe",39],
            [10,"LANGEVIN Samuel",58],[11,"REVILLER Thierry",86],[12,"SAVART Jerome",65],
            [13,"MOULIN Franck",68],[14,"ALENDOURO Victor",66],[15,"PECOT Stève",95],
            [16,"VASTESAEGER Sven",75],[17,"GARNIER Dominique",23],[18,"FLOURET Michel",46],
            [19,"MINARD Anne Laure",76],[20,"PASQUET Frederic",79],[21,"DEVILLERT Christophe",28],
            [22,"LAPIERRE Michael",85],[23,"ROUX Thierry",82],[24,"ROULET David",59],
            [25,"DORDAIN Tony",93],[26,"MENDER Miloud",96],[27,"FONTAINE Julien",29],
            [28,"FOUQUET Arnaud",48],[29,"GICQUEL Fabrice",97],[30,"ARAR Didier",84],
            [31,"BRAJON Bertrand",57],[32,"SCIACCA Aurélia",50],[33,"LOPES LELO Maria",5],
            [34,"FORESTIER David",33],[35,"HUET Jérôme",53],[36,"MARSURA Philippe",42],
            [37,"LINVAL Philippe",69],[38,"HERNOT Laurent",89],[39,"LAKAS Patrice",67],
            [40,"MARCHAND Eric",40],[41,"BOURNAT Thierry",38],[42,"CAMBONI Mario",25],
            [43,"BARICHARD Jérôme",47],[44,"SANSELME Philippe",87],[45,"ANDRE Serge",71],
            [46,"CARTON Noël",24],[47,"PETITJEAN Rémy",64],[48,"TEISSEDRE Christian",37],
            [49,"AMY Jérôme",99],[50,"MOYNAULT Christophe",35],[51,"VéNIANT Romu",92],
            [52,"LEBIGUE Tristan",88],[53,"JUGE Fabrice",26],[54,"VINCENT Jérémy",90],
            [55,"IVART Yann",30],[56,"DESJOUR Patrick",70],[57,"GALLON Fabrice",77],
            [58,"GUYOT Jean-joseph",27],[59,"CHATARD Benoit",80],[60,"ROUX Claude",9],
            [61,"KOWALSKI Dany",63],[62,"PERRETTE Christophe",34],[63,"DUBOURDIEU Stephane",81],
            [64,"LAMBERT Guillaume",54],[65,"FAMBRINI Cyril",52],[66,"MOUNIER Christian",72],
            [67,"BROSSARD Remy",13],[68,"FOUQUET Arnaud",94],[69,"ARNAUD Christian",44]
            ];

var liste2=
    [
        [70,"MOSNIER Bernard",55],
        [71,"BERGERET Lise",8],
        [72,"BERGERET Christophe",7],
        [73,"LEFEBVRE Michel",91],
        [74,"FLEURY Stephanie",15],
        [75,"AUBARD Nicolas",74],
        [76,"VALLEE Nelly",45],
        [77,"BERNABEU Julien",73],
        [78,"DUPRé Alain",78],
        [79,"SALIGNAT Jean-claude",4],
        [80,"VOLAT Marc",21],
        [81,"BENIGAUD Sylviane",18],
        [82,"LEPAIN Laurent",22]
    ];

var ll = list.concat(liste2);
var tri = [];
créeTableau(ll);

function sortAlpha() {
        alpha = "abcdefghijklmnopqrstuvwxyz";
        
        for(var i = 0; i < alpha.length; i++){
                for(j = 0; j < ll.length; j++){ 
                        if(alpha[i] == ll[j][1][0].toLowerCase()){
                                tri.push(ll[j]);

                        }
                }
                //trie par ordre alphabetique
                tri.sort(function(a,b){
                        if(a[1] < b[1]) { return -1; }
                        if(a[1] > b[1]) { return 1; }
                        return 0;
                });

               
        }
        créeTableau(tri);
        tri = [];
}

function créeTableau(array){
        var field = "";
        for(p = 0; p < array.length;p++){
                field += "<tr><td>"+array[p][0]+"</td><td>"+array[p][1]+"</td><td>"+array[p][2]+"</td></tr>";
                
        }
        var tableau = document.getElementById("tableau");
        tableau.innerHTML = field;
}



function reverse(){
        var reversed = ll.reverse();

        for(var i = 0; i<=ll.length; i++)
        {
                if(i >= ll.length)
                {
                        reversed;
                }
        }
        créeTableau(reversed);
        tri = [];
        
}

function croissant(){
        var croissant = ll.reverse();

        for(var i = 0; i<=ll.length; i++)
        {
                if(i >= ll.length)
                {
                        croissant;
                }
        }
        créeTableau(croissant);
        tri = [];
}

    