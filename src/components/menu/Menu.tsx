import React from "react";
import { ShoppingCartOutlined, FolderOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu as MenuLib } from "antd";
import Image from "next/image";
import iconLogo from "@/assets/img/icon-logo-site.svg";
import appointmentIcon from "@/assets/img/appointment-icon.svg";
import excutiveIcon from "@/assets/img/excutive-icon.svg";
import projectIcon from "@/assets/img/project-icon.svg";
import crmIcon from "@/assets/img/crm-icon.svg";
import socialIcon from "@/assets/img/social-icon.svg";
import jobBoardIcon from "@/assets/img/job-board.svg";
import financialIcon from "@/assets/img/financial-icon.svg";
import logisticIcon from "@/assets/img/logistic.svg";
import ecommerceIcon from "@/assets/img/e-commerce-icon.svg";
import analyticIcon from "@/assets/img/analytics.svg";
import supportIcon from "@/assets/img/support.svg";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "grp",
    label: "OVERVIEW",
    type: "group",
    children: [
      { key: "1", label: "File Management", icon: <FolderOutlined /> },
      {
        key: "2",
        label: "Appointment",
        icon: <Image src={appointmentIcon} alt="fail" />,
      },
      {
        key: "3",
        label: "Executive",
        icon: <Image src={excutiveIcon} alt="fail" />,
      },
      {
        key: "4",
        label: "Project",
        icon: <Image src={projectIcon} alt="fail" />,
      },
      { key: "5", label: "CRM", icon: <Image src={crmIcon} alt="fail" /> },
      {
        key: "6",
        label: "Social Medial",
        icon: <Image src={socialIcon} alt="fail" />,
      },
      {
        key: "7",
        label: "Job Board",
        icon: <Image src={jobBoardIcon} alt="fail" />,
      },
      {
        key: "8",
        label: "Financial",
        icon: <Image src={financialIcon} alt="fail" />,
      },
      {
        key: "9",
        label: "Logistics",
        icon: <Image src={logisticIcon} alt="fail" />,
      },
      {
        key: "10",
        label: "E-Commerce",
        icon: <Image src={ecommerceIcon} alt="fail" />,
      },
      {
        key: "11",
        label: "Analytics",
        icon: <Image src={analyticIcon} alt="fail" />,
      },
      {
        key: "12",
        label: "Support",
        icon: <Image src={supportIcon} alt="fail" />,
      },
    ],
  },
  {
    key: "OverViews",
    label: "APPS KIT",
    type: "group",
    children: [
      {
        key: "g1",
        label: "E-Commerce",
        icon: <ShoppingCartOutlined />,
        children: [
          { key: "1", label: "Product" },
          { key: "2", label: "Product Details" },
          { key: "3", label: "Create Products" },
          { key: "4", label: "Edit Product" },
        ],
      },
    ],
  },
];

const Menu = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <div className="sticky top-0">
      <div className="logo-menu flex gap-3 items-center justify-start p-5">
        <Image src={iconLogo} alt="fail" width="60" />
        <p className="text-lg font-bold">Isomorphic</p>
      </div>
      <MenuLib
        onClick={onClick}
        style={{ height: "100vh", overflow: "scroll" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Menu;
