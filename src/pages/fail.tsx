import PageWarpper from "@/components/PageWarpper";
import { FC } from "react";

const Fail: FC = () => {
  return (
    <PageWarpper title="提交失败">
      <h1>fail</h1>
      <p>提交问卷失败</p>
    </PageWarpper>
  );
};

export default Fail;
