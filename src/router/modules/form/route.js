const form = [
  {
    path: "/form",
    name: "form",
    redirect: "/form/base-form",
    component: "main",
    meta: {
      icon: "document",
      title: "表单"
    },
    children: [
      {
        path: "base-form",
        name: "formBaseForm",
        component: "baseForm",
        meta: {
          icon: "",
          title: "基础表单"
        }
      },
      {
        path: "step-form",
        name: "formStepForm",
        component: "stepForm",
        meta: {
          icon: "",
          title: "分步表单",
          introduce:
            "将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"
        }
      }
    ]
  }
];

export default form;
