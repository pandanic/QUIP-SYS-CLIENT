import PageWarpper from "@/components/PageWarpper";
import { FC } from "react";

const Success: FC = () => {
  return (
    <PageWarpper title="提交成功">
      <h1>Success</h1>
      <p>提交问卷成功</p>
    </PageWarpper>
  );
};

export default Success;
