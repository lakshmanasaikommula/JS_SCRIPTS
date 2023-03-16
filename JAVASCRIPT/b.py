import sys
script_name = 'CART_TOTALS_CALCULATION'
totalCost = 0.00
totalCostSaleable = 0.00
totalCostRental = 0.00
totalCostService = 0.00
totalCostCustOwned = 0.00
totalRevenue = 0.00
totalRevenueSaleable = 0.00
totalRevenueRental = 0.00
totalRevenueService = 0.00
totalRevenueCustOwned = 0.00
totalFloorPrice = 0.00
totalListPrice = 0.00
totalCostPercent = 0.00

try:
	for item in context.Quote.GetAllItems():
		if item["CreatedFromContract"] != "Yes":
			item["List_Price"] = item.ListPrice
		floor_price = float(item['FloorPrice']) if item['FloorPrice'] is not None else 0
		lineItemFloorPrice = item.Quantity * floor_price
		totalFloorPrice += lineItemFloorPrice
		margin = discountFromListprice = 0.00
		if float(item.NetPrice) > 0:
			margin = ((item.NetPrice - item.Cost)/item.NetPrice) * 100
			item['Margin'] = str("{:.2f}".format(float(margin)))
			if float(item['List_Price']) > 0:
				discountFromListprice = ((item["List_Price"] - item.NetPrice)/item["List_Price"]) * 100
		#if item.ListPrice > 0:
		#	discountFromListprice = ((item.ListPrice - item.NetPrice)/item.ListPrice) * 100
		#	totalListPrice += item.Quantity * float(item.ListPrice)
		totalListPrice += item.Quantity * float(item["List_Price"])
		if item.ProductTypeName == 'Saleable':
			if item["CreatedFromContract"] != "Yes":
				totalCostSaleable += (item.ExtendedCost)
			totalRevenueSaleable += (item.ExtendedAmount)
		if item.ProductTypeName == 'Rental':
			if item["CreatedFromContract"] != "Yes":
				totalCostRental += (item.ExtendedCost)
			totalRevenueRental += (item.ExtendedAmount)
		if item.ProductTypeName == 'Service':
			if item["CreatedFromContract"] != "Yes":
				totalCostService += (item.ExtendedCost)
			totalRevenueService += (item.ExtendedAmount)
		if item.ProductTypeName == 'Customer Owned':
			if item["CreatedFromContract"] != "Yes":
				totalCostCustOwned += (item.ExtendedCost)
			totalRevenueCustOwned += (item.ExtendedAmount)
		if item["CreatedFromContract"] != "Yes":
			totalCost += (item.ExtendedCost)
		totalRevenue += (item.ExtendedAmount)
	Trace.Write("TOTAL REVENUE : " + str(round(totalRevenue, 2)))
	context.Quote.GetCustomField('Total_Revenue_Saleables').Value = str("{:,.2f}".format(float(totalRevenueSaleable)))
	context.Quote.GetCustomField('Total_Revenue_Rentals').Value = str("{:,.2f}".format(float(totalRevenueRental)))
	context.Quote.GetCustomField('Total_Revenue_Services').Value = str("{:,.2f}".format(float(totalRevenueService)))
	context.Quote.GetCustomField('Total_Revenue_CustomerOwned').Value = str("{:,.2f}".format(float(totalRevenueCustOwned)))
	context.Quote.GetCustomField('Total_Revenue').Value = str("{:,.2f}".format(float(totalRevenue)))
	context.Quote.GetCustomField('Total_Cost').Value = str("{:,.2f}".format(float(totalCost)))
	context.Quote.GetCustomField('Total_Floor_Price').Value = str("{:,.2f}".format(float(totalFloorPrice)))
	context.Quote.GetCustomField('Total_List_Price').Value = str("{:,.2f}".format(float(totalListPrice)))
	Trace.Write("IC TFP : " + str(round(totalFloorPrice, 2)))

	context.Quote.Totals.Amount = float(totalRevenue)
	#context.Quote.Totals.ListPrice = float(totalRevenue)
	context.Quote.Totals.NetPrice = float(totalRevenue)

	totalRSPValue = totalRRPValue = totalRSERPValue = totalRCUSOPValue = totalCSPValue = totalCRPValue = totalCSERPValue = totalCCUSOPValue = totalCostPct = 0.00
	if totalRevenue != 0:
		totalRSPValue = round((totalRevenueSaleable/totalRevenue) * 100, 2)
		totalRRPValue = round((totalRevenueRental/totalRevenue) * 100, 2)
		totalRSERPValue = round((totalRevenueService/totalRevenue) * 100, 2)
		totalRCUSOPValue = round((totalRevenueCustOwned/totalRevenue) * 100, 2)
		totalRevenuePercent = totalRSPValue + totalRRPValue + totalRSERPValue + totalRCUSOPValue if totalRSPValue + totalRRPValue + totalRSERPValue + totalRCUSOPValue < 99.9 else 100.00

	if totalCost != 0:
		totalCSPValue = round((totalCostSaleable/totalCost) * 100, 2)
		totalCRPValue = round((totalCostRental/totalCost) * 100, 2)
		totalCSERPValue = round((totalCostService/totalCost) * 100, 2)
		totalCCUSOPValue = round((totalCostCustOwned/totalCost) * 100, 2)
		totalCostPercent = totalCSPValue + totalCRPValue + totalCSERPValue + totalCCUSOPValue if totalCSPValue + totalCRPValue + totalCSERPValue + totalCCUSOPValue < 99.9 else 100.00

	totalCMargin = 0.00
	totalCMargin = float(totalRevenue) - float(totalCost)
	context.Quote.GetCustomField('Total_Contribution_Margin').Value = str("{:,.2f}".format(float(totalCMargin)))

	totalCMPValue = 0.00
	if totalRevenue != 0:
		totalCMPValue = round(((totalRevenue - totalCost)/totalRevenue) * 100, 2)
	context.Quote.GetCustomField('Total_Contribution_Margin_Percentage').Value = str("{:.2f}".format(float(totalCMPValue)))

	def productTypesRow(productTypes, productType, totalCost, totalCostPercent, totalRevenue, totalRevenuePercent):
		row = productTypes.AddNewRow()
		row["Product_Type"] = str(productType)
		row["Total_Cost_Dlr"] = totalCost
		row["Total_Cost_Perc"] = totalCostPercent if totalCostPercent < 99.9 else 100.00
		row["Total_Revenue_Dlr"] = totalRevenue
		row["Total_Revenue_Perc"] = totalRevenuePercent if totalRevenuePercent < 99.9 else 100.00
		#productTypes.Save()

	productTypes = context.Quote.QuoteTables["Product_Types"]
	productTypes.Rows.Clear()

	if totalRevenueSaleable == 0:
		pass
	else:
		productTypesRow(productTypes, 'Saleable', totalCostSaleable, totalCSPValue, totalRevenueSaleable, totalRSPValue)
	if totalRevenueRental == 0:
		pass
	else:
		productTypesRow(productTypes, 'Rental', totalCostRental, totalCRPValue, totalRevenueRental, totalRRPValue)
	if totalRevenueService == 0:
		pass
	else:
		productTypesRow(productTypes, 'Service', totalCostService, totalCSERPValue, totalRevenueService, totalRSERPValue)
	if totalRevenueCustOwned == 0:
		pass
	else:
		productTypesRow(productTypes, 'Customer Owned', totalCostCustOwned, totalCCUSOPValue, totalRevenueCustOwned, totalRCUSOPValue)
	if totalRevenue == 0:
		pass
	else:
		productTypesRow(productTypes, 'Item Total', totalCost, totalCostPercent, totalRevenue, totalRevenuePercent)

except BaseException as e:
	traceback = sys.exc_info()[2]
	errorText = script_name + " Script Error: " + str(e) + ". Error in row: " + str(traceback.tb_lineno)
	errorMessage = errorText
	Log.Error(script_name, errorText)