

const url = document.location;

const search = url.search;
const params = new URLSearchParams(search);


async function fetchSingleProduct(id) {
  if (!id) throw new Error('Sorry, id is undefined');
  const url = `https://api.noroff.dev/api/v1/rainy-days/${id}`;
  try {
    const response = await fetch(url);

    // Error handling
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Network response was not OK");
    }
  } catch (error) {
    console.log(error);
  }
}

async function renderSingleProduct() {
  const id = params.get("id");
  if (!id) {
    console.error("No 'id' parameter found in the url.");
    return;
  }
  const singleData = await fetchSingleProduct(id);
  const productWrapper = document.getElementById("product-wrapper");
  productWrapper.innerHTML = JSON.stringify(singleData);
 
}

renderSingleProduct();
