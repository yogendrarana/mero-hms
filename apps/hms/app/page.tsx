import LoginForm from "../components/forms/login-form";

const HomePage = () => {
  return (
    <div className="h-full">
        <div className="h-full w-full border-black p-6 bg-gray-50 grid place-items-center">
            <LoginForm />
        </div>
    </div>
  );
}

export default HomePage;