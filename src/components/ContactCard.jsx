import React from "react";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import useDisclose from "../hooks/useDisclose";
import AddAndUpdate from "./AddAndUpdate";
import { toast } from "react-toastify";
const ContactCard = ({ contacts }) => {
  const { onClose, onOpen, isOpen } = useDisclose();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contacts.id}
        className="p-3 rounded-lg bg-yellow flex items-center justify-between"
      >
        <div className="flex gap-2">
          <HiOutlineUserCircle className="text-orange text-4xl" />
          <div className="text-white ">
            <h2 className="text-black font-medium">{contacts.name}</h2>
            <p className="text-black text-sm">{contacts.email}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            onClick={() => {
              deleteContact(contacts.id);
            }}
            className="text-orange cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdate
        contact={contacts}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
