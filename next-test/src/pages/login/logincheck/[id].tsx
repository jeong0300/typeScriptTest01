import { useRouter } from "next/router";

const LoginCheck = () => {
  const router = useRouter();

  const { id } = router.query;

  return <div> {id} </div>;
};

export default LoginCheck;
