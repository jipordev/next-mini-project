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
import { useRouter } from "next/navigation";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";


const BASE_URL = "https://store.istad.co/api/products/"

const ProductTable =() => {
  const [getData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [productDetail, setProductDetail] = useState({} as ProductType)
  const [borderColor, setBorderColor] = useState("#ff8b00");
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDetail = (value: ProductType) => {
    onOpen();
    setOpenModal(true)
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
          'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE0NzIyOTU0LCJpYXQiOjE3MTI1NjI5NTQsImp0aSI6IjBkNGU1MzRlNzJiYTQzOGJhN2VmOThmZGY2YzM3NzczIiwidXNlcl9pZCI6MTd9.LWEV5zKLQJjUA7tJPQRUJDiz1Sckcm2gCbZd9JWeNyI', // 
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
                // key="detail"
                // onClick={() => route.push(`/${row.id}`)}
                key="detail"
                  onClick={()=> handleDetail(row)}
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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="font-kantumruy">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Product details</ModalHeader>
              <ModalBody>
                <p className="font-medium text-xl"> 
                  {productDetail.name}
                </p>
                <p className="text-[14px]">
                  {productDetail.desc}
                </p>
                <Image src={productDetail.image} width={100} height={100} alt="product" />
              
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
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
export default ProductTable