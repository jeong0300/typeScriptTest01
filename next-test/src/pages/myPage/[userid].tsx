import { useRouter } from "next/router";

const Mypage = () => {
  const router = useRouter();

  const { userid } = router.query;

  return;
};

export default Mypage;
