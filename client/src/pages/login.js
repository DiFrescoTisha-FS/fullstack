import { useGoogleOneTapLogin } from "@react-oauth/google";
import { decodeJwt } from "jose";
import axios from "axios";

const LoginPage = () => {
  const login = useGoogleOneTapLogin({
    onSuccess: async (credentialResponse) => {
      try {
        console.log(credentialResponse);
        const { credential } = credentialResponse;
        const payload = credential ? decodeJwt(credential) : undefined;
        if (payload) {
          console.log(payload);

          // Remove the "Bearer " prefix from the token
          const token = credential.replace('Bearer ', '');

          // Make an Axios GET request on successful login
          const response = await axios.get("http://localhost:4000/protected", {
            headers: {
              Authorization: token, // Send the token without the "Bearer" prefix
            },
          });

          console.log(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
    onError: (error) => console.log(error),
  });

  return (
    <div className="Login">
      <div className="card">
        <h3>React Google Oauth Authentication (Client &amp; Server)</h3>
      </div>
    </div>
  );
};

export default LoginPage;
