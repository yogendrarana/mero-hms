import LoginForm from "../components/forms/login-form";

const HomePage = () => {
  return (
    <div className="h-full p-6">
        <div className="h-full w-full border-black p-6 bg-gray-100 rounded-[10px] grid place-items-center">
            <LoginForm />
        </div>
    </div>
  );
}

export default HomePage;