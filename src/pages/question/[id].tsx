import QuesionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";
import styles from "@/styles/Qusetion.module.scss";
import PageWarpper from "@/components/PageWarpper";
import { getQuestionById } from "@/services/question";

type PropsType = {
  success: boolean;
  data?: {
    id: string;
    title: string;

    desc?: string;
    js?: string;
    css?: string;
    isPublish: boolean;
    isDelete: boolean;
    componentList: Array<any>;
  };
  msg?: string;
};

export default function Question(props: PropsType) {
  const { success = false, data, msg = "" } = props;
  const { id, title = "", isDelete, desc, isPublish } = data || {};

  if (!success) {
    return (
      <PageWarpper title="错误">
        <h1>错误</h1>
        <p>{msg}</p>
      </PageWarpper>
    );
  }
  if (isDelete) {
    return (
      <PageWarpper title={title} desc={desc}>
        <h1>错误</h1>
        <p>已经被删除了！</p>
      </PageWarpper>
    );
  }
  if (!isPublish) {
    return (
      <PageWarpper title={title} desc={desc}>
        <h1>错误</h1>
        <p>还未发布的问卷</p>
      </PageWarpper>
    );
  }

  return (
    <PageWarpper title={title}>
      <form action="/api/answer" method="post">
        <input type="hidden" name="questionId" value={id} />
        <div className={styles.componentWarpper}>
          <QuesionInput
            fe_id="c1"
            props={{ title: "你的姓名", placeholder: "请输入你的姓名" }}
          />
        </div>
        <div className={styles.componentWarpper}>
          <QuestionRadio
            fe_id="c2"
            props={{
              title: "你的性别",
              options: [
                { value: "male", text: "男" },
                { value: "female", text: "女" },
              ],
              value: "male",
              isVertical: true,
            }}
          />
        </div>

        <div className={styles.submitBtnContainer}>
          <button type="submit">提交</button>
        </div>
      </form>
    </PageWarpper>
  );
}

export async function getServerSideProps(context: {
  query: { id?: "" | undefined };
}) {
  const { id = "" } = context.query;
  const data = getQuestionById(id);

  return {
    props: data,
  };
}
