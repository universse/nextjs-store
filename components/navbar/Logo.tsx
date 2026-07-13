import Link from "next/link";
import { Button } from "../ui/button";
import { FaStore } from "react-icons/fa6";

const Logo = () => {
  return (
    <Button size="icon">
      <Link href="/">
        <FaStore className="w-6 h-6" />
      </Link>
    </Button>
  );
};

export default Logo;
