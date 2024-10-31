import Input from "./component/Input.jsx";
import Button from "./component/Button.jsx";
import { BiMeteor } from "react-icons/bi";
import Textarea from "./component/Textarea.jsx";

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dapatkan data dari form
    const formData = {
      nama: document.getElementsByName('nama')[0].value,
      email: document.getElementsByName('email')[0].value,
      message: document.getElementsByName('message')[0].value,
    };
    console.log(formData);

    // Logic kirim data ke Webhook Discord dapat ditambahkan di sini
    await fetch("https://discordapp.com/api/webhooks/1301218782496292884/krv0P3DwQUGPOy--wrksHBG_MlRNiOc4U5_GITfbRRbci9mSMezi0_F3SsuWLW8gIw3M", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: `${formData.nama} (${formData.email})`,
        content: formData.message,
      }),
    });

    // Reset form
    document.getElementsByName("nama")[0].value = "";
    document.getElementsByName("email")[0].value = "";
    document.getElementsByName("massage")[0].value = "";
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="max-w-container font-inter space-y-4">
          <h1 className="font-extrabold text-lg flex items-center gap-2">
            Discord Message <BiMeteor />
          </h1>
          <p className="text-tertiary text-justify">
            Kirimkan pesan apapun yang kamu mau.
          </p>
          <form id="formcontact" className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-3">
              <Input placeholder="your name" name="nama" />
              <Input placeholder="yourname@gmail.com" name="email" />
              <Textarea placeholder="type something.." name="message" />
            </div>
            <Button title="Send 😎" background="black" color="white" />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
