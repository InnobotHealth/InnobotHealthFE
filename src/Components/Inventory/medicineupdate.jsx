import React from 'react';

import { useForm, Controller } from 'react-hook-form';
import {
  Card,
  Typography,
} from '@material-tailwind/react';

const MedicineUpdate = () => {
  const { control, handleSubmit, register, reset, formState: { errors } } = useForm({
    defaultValues: {
      medicineName: '',
      medicineType: '',
      expiryDate: '',
      quantity: '',
      unitPrice: '',
    },
  });

  const onSubmit = (data) => console.log(data);

  const handleFormReset = () => {
    reset();
  };

  const handleExpiryDateChange = (e) => {
    const selectedDate = e.target.value;
    const currentDate = new Date();
    const selectedDateObj = new Date(selectedDate);

    if (selectedDateObj < currentDate) {
      alert('Expiry date cannot be in the past');
      setValue('expiryDate', '');
      return;
    }

    setValue('expiryDate', selectedDate);
  };

  return (
    <div className="h-screen grid place-items-center bg-gray-50">
      <Card color="transparent" shadow={true} className="p-7 bg-white">
        <Typography variant="h4" color="blue-gray">
          Edit Medicine
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter edit details for the medicine.
        </Typography>
        <br />

        <form className="mb-4 w-[500px] grid grid-cols-2 gap-6">


          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              stockid
            </Typography>
            <br />
            <Controller
              name="stockeid"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  readOnly // Add readOnly attribute here
                  className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter Medicine Name"
                />
              )}
            />
            {errors?.medicineName?.message && (
              <span className="text-red-500 text-sm">{errors?.medicineName?.message}</span>
            )}
          </div>


          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Medicine Name
            </Typography>
            <br />
            <Controller
              name="medicineName"
              rules={{ required: "Medicine Name is required", maxLength: { value: 20, message: "Medicine Name should not exceed 20 characters" }, minLength: { value: 3, message: "Medicine Name should not be less than 3 characters" }, pattern: { value: /^[A-Za-z]+$/i, message: "Medicine Name should contain only alphabets" } }}
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter Medicine Name"
                />
              )}
            />
            {errors?.medicineName?.message && (<span className="text-red-500 text-sm">{errors?.medicineName?.message}</span>)}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-6">
              Medicine Type
            </Typography>
            <br />
            <select
              {...register('medicineType', { required: "Medicine Type is required" })}
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select Medicine Type</option>
              <option value="1">Type 1</option>
              <option value="2">Type 2</option>
              <option value="3">Type 3</option>
            </select>
            {errors?.medicineType?.message && (<span className="text-red-500 text-sm">{errors?.medicineType?.message}</span>)}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-6">
              SupplierName
            </Typography>
            <br />
            <select
              {...register('supplierName', { required: "Supplier Name is required" })}
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select supplier</option>
              <option value="1">Type 1</option>
              <option value="2">Type 2</option>
              <option value="3">Type 3</option>
            </select>
            {errors?.supplierName?.message && (<span className="text-red-500 text-sm">{errors?.supplierName?.message}</span>)}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Expiry Date
            </Typography>
            <br />
            <input
              type="date"
              {...register('expiryDate', { required: "Expiry Date is required" })}
              onChange={handleExpiryDateChange}
              className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors?.expiryDate?.message && (<span className="text-red-500 text-sm">{errors?.expiryDate?.message}</span>)}
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Quantity
            </Typography>
            <br />
            <input
              type="text"
              {...register('quantity', {
                required: "Quantity is required",
                min: { value: 1, message: "Quantity should not be less than 1" },
                max: { value: 1000, message: "Quantity should not exceed 1000" },
                pattern: { value: /^[0-9]+$/, message: "Quantity should contain only numbers" }
              })}
              className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter Quantity"
            />
            {errors?.quantity?.message && (
              <span className="text-red-500 text-sm">{errors?.quantity?.message}</span>
            )}

          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Unit Price
            </Typography>
            <br />
            {/* <input
              type="text"
              {...register('unitPrice',{required: "Unit Price is required"},{min: {value: 1, message: "Unit Price should not be less than 1"}},{max: {value: 1000, message: "Unit Price should not exceed 1000"}},{pattern: {value: /^[0-9]+$/i, message: "Unit Price should contain only numbers"}})}
              className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter Unit Price"
            /> */}
            <input
              type="text"
              {...register('unitPrice', {
                required: "Unit Price is required",
                min: { value: 1, message: "Unit Price should not be less than 1" },
                max: { value: 1000, message: "Unit Price should not exceed 1000" },
                pattern: { value: /^[0-9]+$/, message: "Unit Price should contain only numbers" }
              })}
              className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter Unit Price"
            />
            {errors?.unitPrice?.message && (
              <span className="text-red-500 text-sm">{errors?.unitPrice?.message}</span>
            )}

          </div>

          <div className="col-span-2 grid grid-cols-2 gap-3 justify-center">
            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 justify-center"
            >
              Add Medicine
            </button>

            <button
              type="button"
              onClick={handleFormReset}
              className="ml-2 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 justify-center"
            >
              Reset
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default MedicineUpdate;