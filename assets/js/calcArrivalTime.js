const flightDuration = document.querySelectorAll(".flight-duration")
import { generateFlightHours } from "./getStats.js";

export function flightTime(hours, minutes, isReturn){
    flightDuration.forEach((time, index) => {
        if (isReturn){
            if (index >= 6 && index <= 11){
                if (minutes == 0){
                    time.innerHTML = `Duração: ${hours}h`
                } else {
                    time.innerHTML = `Duração: ${hours}h${minutes}m`
                }  
            }
        } else {
            if (minutes == 0){
                time.innerHTML = `Duração: ${hours}h`
            } else {
                time.innerHTML = `Duração: ${hours}h${minutes}m`
            }  
        } 
    })
}

export function arrivalHour(hour, index, from, to, isReturn){

    switch(from.value){
        case "SP - Congonhas (CGH)":
        case "SP - Guarulhos (GRU)":
        case "Campinas (VCP)":

            switch(to.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Santos Dumont (SDU)":
                case "RJ - Galeão (GIG)":
                case "BH - Confins (CNF)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "Porto Alegre (POA)":
                case "Vitória (VIX)":
                case "Campo Grande (CGR)":
                case "Goiânia (GYN)":
                case "Brasília (BSB)":

                    generateFlightHours(hour, index, 1, true)
                    flightTime(1, 30, isReturn);

                break;

                case "Salvador (SSA)":
                case "Palmas (PMW)":
                case "Cuiabá (CGB)":

                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "Aracaju (AJU)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                case "Teresina (THE)":

                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Belém (BEL)":
                case "Porto Velho (PVH)":

                    generateFlightHours(hour, index, 3, true)
                    flightTime(3, 30, isReturn)

                break;

                case "Manaus (MAO)":
                case "Macapá (MCP)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    generateFlightHours(hour, index, 4);
                    flightTime(4, 0, isReturn);

                break;
            }

        break;

        case "RJ - Galeão (GIG)":
        case "RJ - Santos Dumont (SDU)":

            switch(to.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Vitória (VIX)":
                case "BH - Confins (CNF)":

                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "Goiânia (GYN)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Brasília (BSB)":

                    generateFlightHours(hour, index, 1, true);
                    flightTime(1, 30, isReturn);

                break;

                case "Salvador (SSA)":
                case "Porto Alegre (POA)":
                case "Palmas (PMW)":
                case "Campo Grande (CGR)":

                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "Cuiabá (CGB)":
                case "Aracaju (AJU)":
                case "Recife (REC)":
                case "Maceió (MCZ)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                case "Teresina (THE)":
                case "São Luís (SLZ)":

                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;

                case "Porto Velho (PVH)":
                case "Belém (BEL)":
                case "Macapá (MCP)":

                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;

                case "Manaus (MAO)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    generateFlightHours(hour, index, 4);
                    flightTime(4, 0, isReturn);

                break;
            }

        break;

        case "BH - Confins (CNF)":

            switch(to.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Vitória (VIX)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "Salvador (SSA)":
                case "Goiânia (GYN)":
                case "Brasília (BSB)":
                case "Curitiba (CWB)":

                    generateFlightHours(hour, index, 1, true);
                    flightTime(1, 30, isReturn);

                break;

                case "Florianópolis (FLN)":
                case "Campo Grande (CGR)":
                case "Palmas (PMW)":
                case "Maceió (MCZ)":
                case "Aracaju (AJU)":

                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "Recife (REC)":
                case "Porto Alegre (POA)":
                case "João Pessoa (JPA)":
                case "Cuiabá (CGB)":
                case "Natal (NAT)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Macapá (MCP)":

                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    generateFlightHours(hour, index, 4);
                    flightTime(4, 0, isReturn)

                break;
            }
        break;

        case "Vitória (VIX)":

            switch (to.value){

                case "BH - Confins (CNF)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":

                    generateFlightHours(hour, index, 1, true);
                    flightTime(1, 30, isReturn);

                break;

                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "Palmas (PMW)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "Porto Alegre (POA)":
                case "João Pessoa (JPA)":
                case "Fortaleza (FOR)":
                case "Natal (NAT)":
                case "Campo Grande (CGR)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "Cuiabá (CGB)":
                case "São Luís (SLZ)":
                case "Belém (BEL)":
                case "Teresina (THE)":

                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;

                case "Porto Velho (PVH)":
                case "Manaus (MAO)":
                case "Macapá (MCP)":

                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    generateFlightHours(hour, index, 4);
                    flightTime(4, 0, isReturn);

                break;
            }
        break;

        case "Curitiba (CWB)":
        case "Florianópolis (FLN)":

            switch(to.value){

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Florianópolis (FLN)":
                case "Curitiba (CWB)":
                case "Porto Alegre (POA)":

                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "BH - Confins (CNF)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    generateFlightHours(hour, index, 1, true);
                    flightTime(1, 30, isReturn);

                break;

                case "Campo Grande (CGR)":
                case "Vitória (VIX)":
                case "Goiânia (GYN)":
                case "Brasília (BSB)":
                
                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Cuiabá (CGB)":
                case "Maceió (MCZ)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                case "Palmas (PMW)":

                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":
                case "Macapá (MCP)":

                    generateFlightHours(hour, index, 4);
                    flightTime(4, 0, isReturn);

                break;
            }

        break;

        case "Porto Alegre (POA)":

            switch (to.value){

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Campo Grande (CGR)":

                    generateFlightHours(hour, index, 1, true);
                    flightTime(1, 30, isReturn);

                break;

                case "BH - Confins (CNF)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":

                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Salvador (SSA)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "Aracaju (AJU)":
                case "Cuiabá (CGB)":
                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "Palmas (PMW)":

                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;

                case "Natal (NAT)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    generateFlightHours(hour, index, 4);
                    flightTime(4, 0, isReturn);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
            
                    generateFlightHours(hour, index, 4, true);
                    flightTime(4, 30, isReturn);

                break;

                case "Boa Vista (BVB)":
                case "Macapá (MCP)":

                    generateFlightHours(hour, index, 5);
                    flightTime(5, 0, isReturn);

                break;
            }

        break;

        case "Campo Grande (CGR)":
            
            switch (to.value){

                case "Cuiabá (CGB)":
                
                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Porto Alegre (POA)":

                    generateFlightHours(hour, index, 1, true);
                    flightTime(1, 30, isReturn);

                break;

                case "BH - Confins (CNF)": 
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Porto Velho (PVH)":

                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "Rio Branco (RBR)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Palmas (PMW)":

                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;

                case "Belém (BEL)":
                case "Maceió (MCZ)":
                case "Recife (REC)":

                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;

                case "Natal (NAT)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Manaus (MAO)":
                case "Boa Vista (BVB)":
                case "Macapá (MCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":

                    generateFlightHours(hour, index, 4);
                    flightTime(4, 0, isReturn);

                break;
            }

        break;

        case "Cuiabá (CGB)":

            switch (to.value){

                case "Campo Grande (CGR)":

                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "Goiânia (GYN)":
                case "Brasília (BSB)":

                    generateFlightHours(hour, index, 1, true);
                    flightTime(1, 30, isReturn);

                break;

                case "Porto Velho (PVH)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Curitiba (CWB)":
                case "BH - Confins (CNF)":

                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "Florianópolis (FLN)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Palmas (PMW)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "Porto Alegre (POA)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Rio Branco (RBR)":

                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;

                case "Recife (REC)":
                case "Natal (NAT)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Manaus (MAO)":
                case "Boa Vista (BVB)":
                case "Macapá (MCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Belém (BEL)":

                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);
                
                break;
            }

        break;

        case "Goiânia (GYN)":
        case "Brasília (BSB)":

            switch (to.value){

                case "Goiânia (GYN)":
                case "Brasília (BSB)":
                case "BH - Confins (CNF)":
                case "Palmas (PMW)":
                
                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":

                    generateFlightHours(hour, index, 1, true);
                    flightTime(1, 30, isReturn);

                break;

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":

                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "Belém (BEL)":
                case "Porto Alegre (POA)":
                case "Recife (REC)":
                case "Maceió (MCZ)":
                case "João Pessoa (JPA)":
                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Natal (NAT)":
                case "Macapá (MCP)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "Manaus (MAO)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;
            }

        break;

        case "Aracaju (AJU)":
        case "Maceió (MCZ)":

            switch (to.value){

                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":

                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "Fortaleza (FOR)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Natal (NAT)":

                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "BH - Confins (CNF)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Palmas (PMW)":
                case "Belém (BEL)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":

                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;
                
                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Manaus (MAO)":
                case "Macapá (MCP)":
                
                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":
                case "Porto Velho (PVH)":
                case "Porto Alegre (POA)":

                    generateFlightHours(hour, index, 5);
                    flightTime(5, 0, isReturn);

                break;
            }

        break;

        case "Salvador (SSA)":

            switch (to.value){

                case "Maceió (MCZ)":
                case "Aracaju (AJU)":
                case "Recife (REC)":
                
                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                
                    generateFlightHours(hour, index, 1, true);
                    flightTime(1, 30, isReturn);

                break;

                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                
                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "Fortaleza (FOR)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Palmas (PMW)":
                
                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "Curitiba (CWB)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":
                case "Florianópolis (FLN)":
                case "Belém (BEL)":

                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;

                case "Porto Alegre (POA)":
                case "Porto Velho (PVH)":
                case "Macapá (MCP)":
                case "Manaus (MAO)":

                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;

                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    generateFlightHours(hour, index, 5);
                    flightTime(5, 0, isReturn);

                break;

            }
        break;

        case "Recife (REC)":
        case "João Pessoa (JPA)":

            switch (to.value){

                case "Recife (REC)":
                case "Maceió (MCZ)":
                case "Aracaju (AJU)":
                case "Fortaleza (FOR)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":
                
                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "Salvador (SSA)":

                    generateFlightHours(hour, index, 1, true);
                    flightTime(1, 30, isReturn);

                break;

                case "São Luís (SLZ)":
                case "Teresina (THE)":

                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "BH - Confins (CNF)":
                case "Palmas (PMW)":
                case "Belém (BEL)":
                case "Vitória (VIX)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);
                
                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Macapá (MCP)":

                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":
                case "Campo Grande (CGR)":
                case "Cuiabá (CGB)":

                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;

                case "Manaus (MAO)":
                case "Porto Alegre (POA)":

                    generateFlightHours(hour, index, 4);
                    flightTime(4, 0, isReturn);

                break;

                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":

                    generateFlightHours(hour, index, 4, true);
                    flightTime(4, 30, isReturn);

                break;

            }
        break;

        case "Natal (NAT)":
        case "Fortaleza (FOR)":

            switch (to.value){

                case "Natal (NAT)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Maceió (MCZ)":
                case "Fortaleza (FOR)":

                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Teresina (THE)":
                case "São Luís (SLZ)":

                    generateFlightHours(hour, index, 1, true);
                    flightTime(1, 30, isReturn);

                break;

                case "Belém (BEL)":
                case "Palmas (PMW)":
                case "Macapá (MCP)":

                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;
                
                case "BH - Confins (CNF)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Vitória (VIX)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Cuiabá (CGB)":

                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;

                case "Curitiba (CWB)":
                case "Manaus (MAO)":
                
                    generateFlightHours(hour, index, 4);
                    flightTime(4, 0, isReturn);

                break;

                case "Campo Grande (CGR)":
                case "Florianópolis (FLN)":

                    generateFlightHours(hour, index, 4, true);
                    flightTime(4, 30, isReturn);

                break;

                case "Porto Alegre (POA)":
                case "Rio Branco (RBR)":
                case "Boa Vista (BVB)":
                case "Porto Velho (PVH)":

                    generateFlightHours(hour, index, 5);
                    flightTime(5, 0, isReturn);
            }
        break;

        case "São Luís (SLZ)":
        case "Teresina (THE)":

            switch (to.value){

                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "Fortaleza (FOR)":
                case "Belém (BEL)":

                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "Macapá (MCP)":
                case "Palmas (PMW)":
                
                    generateFlightHours(hour, index, 1, true);
                    flightTime(1, 30, isReturn);

                break;

                case "Recife (REC)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Salvador (SSA)":
    
                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Manaus (MAO)":
                case "Boa Vista (BVB)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Cuiabá (CGB)":

                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;
            
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "Campo Grande (CGR)":
                case "Porto Velho (PVH)":

                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;

                case "Curitiba (CWB)":
                case "Rio Branco (RBR)":
                
                    generateFlightHours(hour, index, 4);
                    flightTime(4, 0, isReturn);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    generateFlightHours(hour, index, 5);
                    flightTime(5, 0, isReturn);

                break;
            }

        break;


        case "Palmas (PMW)":

            switch (to.value){

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                
                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "Teresina (THE)":
                case "São Luís (SLZ)":
                case "Belém (BEL)":
                case "Macapá (MCP)":

                    generateFlightHours(hour, index, 1, true);
                    flightTime(1, 30, isReturn);

                break;

                case "Recife (REC)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Salvador (SSA)":
                case "Fortaleza (FOR)":
                case "BH - Confins (CNF)":
                case "Cuiabá (CGB)":
                case "Manaus (MAO)":

                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "Vitória (VIX)":
                case "Boa Vista (BVB)":
                case "Campo Grande (CGR)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "Curitiba (CWB)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":

                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;
            }
        break;

        case "Belém (BEL)":
        case "Macapá (MCP)":
            
            switch (to.value){

                case "Belém (BEL)":
                case "Macapá (MCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
               
                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "Manaus (MAO)":
                case "Palmas (PMW)":
                case "Fortaleza (FOR)":
                case "Boa Vista (BVB)":

                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "Recife (REC)":
                case "Aracaju (AJU)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Maceió (MCZ)":
                case "Brasília (BSB)":
                case "Goiânia (GYN)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "Cuiabá (CGB)":
                case "Salvador (SSA)":
                
                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;
                
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Campo Grande (CGR)":
                
                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;

                case "Curitiba (CWB)":
                
                    generateFlightHours(hour, index, 4);
                    flightTime(4, 0, isReturn);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    generateFlightHours(hour, index, 5);
                    flightTime(5, 0, isReturn);

                break;

            }

        break;

        case "Manaus (MAO)":

            switch (to.value){

                case "Boa Vista (BVB)":
                
                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                case "Macapá (MCP)":

                    generateFlightHours(hour, index, 1, true);
                    flightTime(1, 30, isReturn);

                break;

                case "Belém (BEL)":

                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);

                break;

                case "Palmas (PMW)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Cuiabá (CGB)":
                case "Teresina (THE)":
                case "São Luís (SLZ)":

                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;

                case "Fortaleza (FOR)":
                case "Natal (NAT)":
                case "Recife (REC)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "João Pessoa (JPA)":
                case "BH - Confins (CNF)":
                case "Vitória (VIX)":

                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Campo Grande (CGR)":

                    generateFlightHours(hour, index, 4);
                    flightTime(4, 0, isReturn);

                break;

                case "Curitiba (CWB)":
                case "Florianópolis (FLN)":

                    generateFlightHours(hour, index, 4, true);
                    flightTime(4, 30, isReturn);

                break;

                case "Porto Alegre (POA)":

                    generateFlightHours(hour, index, 5);
                    flightTime(5, 0, isReturn)
            }
        break;

        case "Boa Vista (BVB)":

            switch (to.value){

                case "Manaus (MAO)":
                case "Macapá (MCP)":

                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "Belém (BEL)":
                case "Porto Velho (PVH)":
                case "Rio Branco (RBR)":
                
                    generateFlightHours(hour, index, 2);
                    flightTime(2, 0, isReturn);
                
                break;

                case "Cuiabá (CGB)":
                case "São Luís (SLZ)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "Palmas (PMW)":
                
                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Teresina (THE)":
                case "Fortaleza (FOR)":
            
                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;

                case "BH - Confins (CNF)":
                case "Vitória (VIX)":
                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Recife (REC)":
                case "Natal (NAT)":
                case "João Pessoa (JPA)":
                case "Salvador (SSA)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":

                    generateFlightHours(hour, index, 4);
                    flightTime(4, 0, isReturn);

                break;

                case "Curitiba (CWB)":

                    generateFlightHours(hour, index, 4, true);
                    flightTime(4, 30, isReturn);

                break;

                case "Florianópolis (FLN)":
                case "Porto Alegre (POA)":

                    generateFlightHours(hour, index, 5);
                    flightTime(5, 0, isReturn);

                break;
            }
        break;

        case "Rio Branco (RBR)":
        case "Porto Velho (PVH)":

            switch (to.value){

                case "Rio Branco (RBR)":
                case "Porto Velho (PVH)":

                    generateFlightHours(hour, index, 1);
                    flightTime(1, 0, isReturn);

                break;

                case "Manaus (MAO)":
                
                    generateFlightHours(hour, index, 1, true);
                    flightTime(1, 30, isReturn);

                break;

                case "Cuiabá (CGB)":
                case "Boa Vista (BVB)":

                    generateFlightHours(hour, index, 2, true);
                    flightTime(2, 30, isReturn);

                break;

                case "Brasília (BSB)":
                case "Goiânia (GYN)":
                case "Palmas (PMW)":
                
                    generateFlightHours(hour, index, 3);
                    flightTime(3, 0, isReturn);

                break;

                case "Campo Grande (CGR)":
                case "Belém (BEL)":
                case "Macapá (MCP)":
                
                    generateFlightHours(hour, index, 3, true);
                    flightTime(3, 30, isReturn);

                break;

                case "SP - Congonhas (CGH)":
                case "SP - Guarulhos (GRU)":
                case "Campinas (VCP)":
                case "São Luís (SLZ)":
                case "Teresina (THE)":
                case "BH - Confins (CNF)":

                    generateFlightHours(hour, index, 4);
                    flightTime(4, 0, isReturn);

                break;

                case "RJ - Galeão (GIG)":
                case "RJ - Santos Dumont (SDU)":
                case "Vitória (VIX)":
                case "Curitiba (CWB)":
                case "Fortaleza (FOR)":
                
                    generateFlightHours(hour, index, 4, true);
                    flightTime(4, 30, isReturn);

                break;

                case "Salvador (SSA)":
                case "Porto Alegre (POA)":
                case "Florianópolis (FLN)":
                case "Aracaju (AJU)":
                case "Maceió (MCZ)":
                case "Recife (REC)":
                case "João Pessoa (JPA)":
                case "Natal (NAT)":

                    generateFlightHours(hour, index, 5);
                    flightTime(5, 0, isReturn);

                break;

            }

        break;
    }
}