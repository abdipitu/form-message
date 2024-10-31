document.getElementById('formcontact').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    let nama = document.getElementsByName('nama')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let massage = document.getElementsByName("massage")[0].value;
  
    await fetch("https://discordapp.com/api/webhooks/1301218782496292884/krv0P3DwQUGPOy--wrksHBG_MlRNiOc4U5_GITfbRRbci9mSMezi0_F3SsuWLW8gIw3M", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: `${nama} (${email})`, content: massage })
    });
  
    console.log("sukses");
    // Reset form
    document.getElementsByName("nama")[0].value = "";
    document.getElementsByName("email")[0].value = "";
    document.getElementsByName("massage")[0].value = "";
});