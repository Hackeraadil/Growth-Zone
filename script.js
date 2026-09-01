const service=document.getElementById("service"),qty=document.getElementById("qty"),qtyValue=document.getElementById("qtyValue"),total=document.getElementById("total");
function updateTotal(){const amount=Number(service.value)*Number(qty.value);qtyValue.textContent=qty.value;total.textContent="₹"+amount.toLocaleString("en-IN")}
service.addEventListener("change",updateTotal);qty.addEventListener("input",updateTotal);updateTotal();
const modal=document.getElementById("modal");
function openOrder(name,price){document.getElementById("orderTitle").textContent=name+" Package";document.getElementById("orderPrice").textContent="Estimated price: ₹"+price;modal.classList.add("show");modal.setAttribute("aria-hidden","false")}
function closeOrder(){modal.classList.remove("show");modal.setAttribute("aria-hidden","true")}
modal.addEventListener("click",e=>{if(e.target===modal)closeOrder()});
function submitOrder(e){e.preventDefault();const name=document.getElementById("name").value;const contact=document.getElementById("contact").value;alert(`Thanks ${name}! Request received for ${contact}. Connect this form to your backend/WhatsApp before production.`);closeOrder();e.target.reset()}
