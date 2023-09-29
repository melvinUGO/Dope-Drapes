import React, { useEffect, useState } from "react";
import Loading from "@/app/loading";
import { NigerianStates } from "@/assets/NigerianStates";
import { useGlobalUserContext } from "@/contexts/userContext";
import { UserDetails } from "@/types";
import axios from "axios";

const AccountDetailsForm = ({}) => {
  const { user, logout } = useGlobalUserContext();
  const [userDetails, setUserDetails] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [saving, setSaving] = useState(false);
  const [userDetailsLoading, setUserDetailsLoading] = useState(false);
  const [error, setError] = useState(false);
  const data = { userId: user?.userId, name, email, state, number, address };

  const clearFormInput = () => {
    setName("");
    setEmail("");
    setState("");
    setAddress("");
    setNumber("");
  };

  const saveAccountDetails = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    setError(false);

    try {
      if (userDetails.length > 0) {
        return await updateAccountDetails();
      } else {
        await axios.post("/api/account/address", data);

        setSaving(false);
        clearFormInput();
        getUserDetails();
      }
    } catch (error) {
      setError(true);
    }
  };

  const updateAccountDetails = async () => {
    await axios.put("/api/account/address", data);

    setSaving(false);
    clearFormInput();
    getUserDetails();
  };

  const getUserDetails = async () => {
    setUserDetailsLoading(true);
    const response = await axios("/api/account/address?id=" + user?.userId);
    const userDetails = response.data;
    setUserDetails(userDetails);
    if (userDetails) {
      setName(userDetails?.name);
      setEmail(userDetails?.email);
      setState(userDetails?.state);
      setAddress(userDetails?.address);
      setNumber(userDetails?.number);
    }
    setUserDetailsLoading(false);
  };

  useEffect(() => {
    if (user.userId) {
      getUserDetails();
    }
  }, [user.userId]);

  if (userDetailsLoading) {
    return <Loading />;
  }

  return (
    <form onSubmit={saveAccountDetails}>
      <input
        required
        type="text"
        name="fullName"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <select
        name="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="">--Select State--</option>
        {NigerianStates.map((state, index) => {
          return (
            <option value={state} key={index}>
              {state}
            </option>
          );
        })}
      </select>
      <br />
      <input
        required
        type="text"
        placeholder="Street Address"
        value={address}
        name="address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <input
        required
        type="tel"
        placeholder="Number"
        value={number === null ? "" : number}
        name="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      {error && <p>An error occured while saving</p>}
      <button className="btn" type="submit">
        {saving ? "Saving" : "Save"}
      </button>
    </form>
  );
};

export default AccountDetailsForm;
