function round_number(num) {
    //first, move the decimal two places
    num = num * 100;

    //then, round the number to the nearest integer
    num = Math.round(num);

    //then move the decimal back two places
    num = num / 100;

    // handle trailing zeroes
    num = num.toFixed(2);

    return num;
}

const inputs = document.querySelectorAll("[name='qty']"); //this will grab all the inputs with name 'qty'

inputs.forEach(function (input) {
    input.addEventListener("change", function (e) {
        const this_input = e.target;
            const qty = parseFloat(e.target.value);
            const this_row = this_input.closest(".row");

                const newstation = this_row.querySelector(".new-station");
                const new_span = newstation.querySelector("span");
                const new_price = parseFloat(newstation.dataset.price);
                const new_number = qty / new_price;
                
                new_span.innerHTML = round_number(new_number); //inner HTML updates the span 
                newstation.classList.add("active");

               const total = this_row.querySelector(".total-stations");
                const total_span = total.querySelector("span");
                const current = parseFloat(total.dataset.price);
                const total_num = qty / new_price + current;
                
                total_span.innerHTML = round_number(total_num);
                total.classList.add("active");

               const capita = this_row.querySelector(".per-residents"); 
                const capita_span = capita.querySelector("span");
                const per_residents =  total_num / 8400000 * 100000 ;
                
                capita_span.innerHTML = round_number(per_residents);
                capita.classList.add("active");

                

                /*
                let cheap = false; 
                
                    if (freshdirect_cost < amazon_cost && freshdirect_cost < peapod_cost) {
                        cheap = freshdirect
                    }

                    if (amazon_cost < freshdirect_cost && amazon_cost < peapod_cost) {
                        cheap = amazon
                    }

                    if (peapod_cost < amazon_cost && peapod_cost < freshdirect_cost) {
                        cheap = peapod;
                    }

                    const current_cheap = this_row.querySelector(".cheap");

                    if(current_cheap) {
                        current_cheap.classList.remove("cheap");
                    }
                    
                    if(cheap) { 
                    cheap.classList.add("cheap");
                    } */

                    
    });

});