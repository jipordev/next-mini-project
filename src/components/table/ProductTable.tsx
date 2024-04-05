"use client";
import LoadingComponent from "@/app/loading";
import { ProductType } from "../types/ProductType";
import { Input } from "@nextui-org/react";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { useState, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { IoEllipsisHorizontal } from "react-icons/io5";
import Image from "next/image";
import { BASE_API_URL } from "../../../lib/constants";

const customStyles = {
  rows: {
    style: {
      minWidth: "1000px",
      minHeight: "72px", // override the row he heiight
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};


const ProductTable = () => {
  const [getProduct, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [productDetail, setProductDetail] = useState({} as ProductType)
  const [borderColor, setBorderColor] = useState("#ff8b00")

  const handleDetail = (value: ProductType) => {
    onOpen();
    setProductDetail(value)
    
  }
  const handleInputChange = (e:any) => {
    setSearch(e.target.value);
    setBorderColor('#00ff00'); 
  }

  const columnsData: TableColumn<ProductType>[] = [
    {
      name: "ID",
      selector: (row): any => (
        <div className=" font-bold text-blue-600">{row.id}</div>
      ),
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
    {
      name: "Image",
      selector: (row): any => (
        <img src={row.image} width={80} height={80} alt="product" />
      ),
    },
    {
      name: "Action",
      cell: (row) => {
        return (
          <div className="rounded-[50%] bg-gray-50 w-max p-2">
            <Dropdown >
              <DropdownTrigger>
                <button>
                  <IoEllipsisHorizontal />
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  key="detail"
                  onPress={()=> handleDetail(row)}
                >
                  View Detail
                </DropdownItem>

                <DropdownItem key="edit">Edit</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`${BASE_API_URL}products/`);
      const response = await data.json();
      setProduct(response.results);
      setFilter(response.results);
    }
    fetchData();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!search) {
      setFilter(getProduct);
      return;
    }
    const result = getProduct.filter((item: ProductType) => {
      return item.name?.toLowerCase().includes(search.toLowerCase());
    });
    setFilter(result);
  }, [setProduct, search]);

  const paginationComponentOptions = {
    rowsPerPageText: "ជួរដេកក្នុងមួយទំព័រ",
    rangeSeparatorText: "នៃ",
    selectAllRowsItem: true,
    selectAllRowsItemText: "ទាំងអស់",
  };

  return (
    <div className="w-full">
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  {productDetail.name}
                </p>
                <p>
                  {productDetail.price}
                </p>
                <Image src={productDetail.image} width={100} height={100} alt="product" />
              
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <DataTable
        progressPending={isLoading}
        columns={columnsData}
        fixedHeader={true}
        fixedHeaderScrollHeight="500px"
        selectableRows
        pagination
        subHeader
        // customStyles={customStyles}
        subHeaderComponent={
          <input
            className="bg-white border-[1px] px-9 py-2 w-max rounded-md"
            style={{ borderColor: borderColor }}
            placeholder="Search"
            value={search}
            onChange={handleInputChange}
          ></input>
        }
        paginationComponentOptions={paginationComponentOptions}
        onSelectedRowsChange={() => console.log("row selected")}
        progressComponent={<LoadingComponent />}
        customStyles={customStyles}
        data={filter}
        // actions={
        //   <Button size="sm" color="primary">
        //     Export PDF
        //   </Button>
        // }
      />
    </div>
  );
};

export default ProductTable;