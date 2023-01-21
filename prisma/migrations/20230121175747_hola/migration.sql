-- CreateTable
CREATE TABLE "ShippingDetails" (
    "id" SERIAL NOT NULL,
    "domicilio" TEXT NOT NULL,
    "localidad" TEXT NOT NULL,
    "ordersId" INTEGER NOT NULL,

    CONSTRAINT "ShippingDetails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShippingDetails" ADD CONSTRAINT "ShippingDetails_ordersId_fkey" FOREIGN KEY ("ordersId") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
