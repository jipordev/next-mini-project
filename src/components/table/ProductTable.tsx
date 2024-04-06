"use client"

import LoadingComponent from "@/app/loading";
import { useState, useEffect } from "react";
import DataTable, { TableColumn } from "react-data-table-component"
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import Image from "next/image";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { ProductType } from "../types/ProductType";
import { useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";


const BASE_URL = "https://store.istad.co/api/products/"

export default function ProductTable() {
  const [getData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [productDetail, setProductDetail] = useState({} as ProductType)
  const [borderColor, setBorderColor] = useState("#ff8b00");

  const handleDetail = (value: ProductType) => {
    onOpen();
    setProductDetail(value)
  }
  const handleInputChange = (e: any) => {
    setSearch(e.target.value);
    setBorderColor('#00ff00');
  }
  const handleDelete = async (productId: number) => {
    try {
      const response = await fetch(`${BASE_URL}${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NTM2OTE4LCJpYXQiOjE3MTIzNzY5MTgsImp0aSI6ImNiMWJkYjIxYjA1MDQ1MjdiYjVmODFjN2Q3MTg3YmQ1IiwidXNlcl9pZCI6MTd9.y_YHYM6GmJbvQO18Q2gvxThsbJBHX_NKuWZakaYMakc', // 
          'Cookie': 'csrftoken=your_csrf_token_here; sessionid=your_session_id_here', // Replace with your actual CSRF token and session ID
        },
      });
      const data = await response.json();
      console.log('Deleted product:', data);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  const route = useRouter()

  const columns: TableColumn<ProductType>[] = [
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
        <Image src={`${row.image}`} width={80} height={80} alt="product" />
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
                className="w-max hover:rounded-xl font-bold text-green-400 hover:bg-green-400 hover:font-bold hover:text-white"
                key="detail"
                onClick={() => route.push(`/${row.id}`)}
              >
                View Detail
              </DropdownItem>

                <DropdownItem key="edit" onClick={() => route.push("/dashboard/update")}
                className="w-max hover:rounded-xl font-bold text-yellow-400 hover:bg-yellow-400 hover:font-bold hover:text-white"
                >
                  Edit
                  </DropdownItem>

                <DropdownItem
                  key="delete"
                  className="w-max hover:rounded-xl font-bold text-red-400 hover:bg-red-400 hover:font-bold hover:text-white"
                  color="danger"
                  onClick={() => row.id && handleDelete(row.id)}
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
    fetch(BASE_URL).then(res => res.json())
      .then(data => setData(data.results))
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!search) {
      setFilter(getData);
      return;
    }
    const result = getData.filter((item: ProductType) => {
      return item.name?.toLowerCase().includes(search.toLowerCase());
    });
    setFilter(result);
  }, [getData, search]);


  return (
    <>
      <div className="flex flex-col w-[340px] pt-2 m-auto text-center sm:mx-7 sm:w-[700px]  mg:w-[1000px] lg:w-[1200px]  lg:justify-between lg:flex h-max bg-[whitesmoke]">
        <DataTable
        selectableRows
          progressPending={isLoading}
          columns={columns}
          fixedHeader={true}
          fixedHeaderScrollHeight="500px"
          subHeader
          subHeaderComponent={ 
            <input
              className=" bg-white border-[1px] px-9 py-2 w-[150px] md:w-[200px] lg:w-[300px] rounded-md"
              style={{ borderColor: borderColor }}
              placeholder="Search"
              value={search}
              onChange={handleInputChange}
            ></input>
          }
          progressComponent={<LoadingComponent />}
          data={filter}
        />
      </div>
    </>
  )
}
