import React, { useState } from "react";
import {
  Breadcrumbs,
  Button,
  Input,
  ButtonOutline,
  Modal,
} from "../../components";
import AppConfig from "../../utilities/config";
import BillingHistory from "./BillingHistory";
export default function UserDetails() {
  const [historyModal, setHistoryModal] = useState(false);
  const [links] = useState([
    {
      id: 1,
      title: "User",
      url: AppConfig.PATHS.Admin.User.Base,
    },
    {
      id: 2,
      title: "Name of user",
      url: "#",
    },
  ]);
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Breadcrumbs links={links} />
        <Button className="!bg-[#D11F54] max-w-max">Delete User</Button>
      </div>

      <div className="">
        <form action="" className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-6 col-span-1">
            <div className="w-full">
              <Input
                placeholder={"Name of user"}
                id="name"
                label="Name of user"
                // error={errors.name}
                // value={values.name}
                // touched={touched.name}
                // onChange={handleChange("name")}
                // onBlur={handleBlur}
              />
            </div>
            <div className="w-full">
              <Input
                placeholder={"@username"}
                id="username"
                label="User name"
                // error={errors.username}
                // value={values.username}
                // touched={touched.username}
                // onChange={handleChange("username")}
                // onBlur={handleBlur}
              />
            </div>

            <div className="w-full">
              <Input
                placeholder={"Email address of user"}
                id="email"
                type="email"
                label="Email address"
                // error={errors.email}
                // value={values.email}
                // touched={touched.email}
                // onChange={handleChange("email")}
                // onBlur={handleBlur}
              />
            </div>
            <div className="w-full">
              <Input
                placeholder={"DD/MM/YY"}
                id="date"
                type="date"
                label="Date joined"
                // error={errors.date}
                // value={values.date}
                // touched={touched.date}
                // onChange={handleChange("date")}
                // onBlur={handleBlur}
              />
            </div>

            <div className="w-full">
              <Input
                placeholder={"Category"}
                id="category"
                label="Category"
                // error={errors.category}
                // value={values.category}
                // touched={touched.category}
                // onChange={handleChange("category")}
                // onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="w-full">
              <Input
                placeholder={"Subscription"}
                id="subscription"
                label="Subscription"
                // error={errors.subscription}
                // value={values.subscription}
                // touched={touched.subscription}
                // onChange={handleChange("subscription")}
                // onBlur={handleBlur}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base text-[#000000] font-medium">
                Subscriptions
              </span>

              <ButtonOutline
                onClick={(e) => {
                  e?.preventDefault();
                  setHistoryModal(true);
                }}
                className="max-w-max"
              >
                History
              </ButtonOutline>
            </div>
          </div>
        </form>
      </div>

      <Modal
        sizeClass="sm:max-w-[1059px] !px-0"
        open={historyModal}
        setOpen={setHistoryModal}
      >
        <BillingHistory />
      </Modal>
    </div>
  );
}
