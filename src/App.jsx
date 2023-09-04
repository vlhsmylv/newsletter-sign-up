import { useState } from "react";
import { Form, Success } from "./components";

const App = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <main className="lg:h-screen h-full flex justify-center items-center">
      {success ? <Success email={email} /> : <Form setEmail={setEmail} setSuccess={setSuccess} />}
    </main>
  );
};

export default App;
