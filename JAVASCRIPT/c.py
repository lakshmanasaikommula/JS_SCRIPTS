#To be uncommented after the DM-QM integration
region = context.Quote.GetCustomField("Opportunity_Region").Value
if len(context.Quote.GetCustomField('Sub_Region').Value.split(' - ')) > 1:
    area = context.Quote.GetCustomField("Sub_Region").Value.split(' - ')[2]
else:
    area = ''

#Hardcoding Area and region
'''context.Quote.GetCustomField("Area").Value = "Alaska"
context.Quote.GetCustomField("Region").Value = "North America"

region = context.Quote.GetCustomField("Region").Value
area = context.Quote.GetCustomField("Area").Value'''

for item in context.Items:
    item['List_Price'] = item.ListPrice
    if 'COPPER ADDER' in item.Description or 'LEAD ADDER' in item.Description:
        item['FloorPrice'] = item.ListPrice
        #item['UOM'] = SqlHelper.GetFirst("SELECT UnitOfMeasure FROM PRODUCTS WHERE PRODUCT_CATALOG_CODE = '" +  context.Product.PartNumber + "'").UnitOfMeasure
        unitOfMeasure = SqlHelper.GetFirst("SELECT UnitOfMeasure FROM PRODUCTS WHERE PRODUCT_CATALOG_CODE = '" +  context.Product.PartNumber + "'").UnitOfMeasure
        item['UOM'] = unitOfMeasure
        if context.Quote.GetCustomField('BH_UOM_System').Value == 'IMPERIAL':
            if unitOfMeasure != '':
                if unitOfMeasure == 'M':
                    item['UOM'] = 'FT'
                    #item['FloorPrice'] = item.ListPrice * 3.2808399000
                if unitOfMeasure == 'L':
                    item['UOM'] = 'GAL'
                if unitOfMeasure == 'KM':
                    item['UOM'] = 'MI'
        if context.Quote.GetCustomField('BH_UOM_System').Value == 'METRIC':
            if unitOfMeasure != '':
                if unitOfMeasure == 'FT':
                    item['UOM'] = 'M'
                    #item['FloorPrice'] = item.ListPrice * 0.3048000000
                if unitOfMeasure == 'GAL':
                    item['UOM'] = 'L'
                if unitOfMeasure == 'MI':
                    item['UOM'] = 'KM'
    else:
        if context.Product.Attributes.GetByName('Copper Adder') is not None:
            item['CuAdderApproval'] = 'No'
            if context.Product.Attributes.GetByName('Copper Adder').GetValue() == '':
                item['CuAdderApproval'] = 'Yes'
        productFamily = context.Product.FamilyCode
        productRevenueType = context.Product.Type.Name
        #item['UOM'] = SqlHelper.GetFirst("SELECT UnitOfMeasure FROM PRODUCTS WHERE PRODUCT_CATALOG_CODE = '" +  context.Product.PartNumber + "'").UnitOfMeasure
        unitOfMeasure = SqlHelper.GetFirst("SELECT UnitOfMeasure FROM PRODUCTS WHERE PRODUCT_CATALOG_CODE = '" +  context.Product.PartNumber + "'").UnitOfMeasure
        item['UOM'] = unitOfMeasure
        if context.Quote.GetCustomField('BH_UOM_System').Value == 'IMPERIAL':
            if unitOfMeasure != '':
                if unitOfMeasure == 'M':
                    item['UOM'] = 'FT'
                if unitOfMeasure == 'L':
                    item['UOM'] = 'GAL'
                if unitOfMeasure == 'KM':
                    item['UOM'] = 'MI'
        if context.Quote.GetCustomField('BH_UOM_System').Value == 'METRIC':
            if unitOfMeasure != '':
                if unitOfMeasure == 'FT':
                    item['UOM'] = 'M'
                if unitOfMeasure == 'GAL':
                    item['UOM'] = 'L'
                if unitOfMeasure == 'MI':
                    item['UOM'] = 'KM'
        item['Engineering_Part_Number'] = SqlHelper.GetFirst("SELECT MPN FROM PRODUCTS WHERE PRODUCT_CATALOG_CODE = '" +  context.Product.PartNumber + "'").MPN
        if productFamily == "DB":
            item['BitType'] = ''
            item['BitSize'] = ''
            BrandingProductName = ''
            if context.Product.Attributes.GetByName('Bit Type') is not None:
                item['BitType'] = context.Product.Attributes.GetByName('Bit Type').GetValue()
            if context.Product.Attributes.GetByName('Bit Diameter') is not None:
                item['BitSize'] = context.Product.Attributes.GetByName('Bit Diameter').GetValue()
            if context.Product.Attributes.GetByName('Branding Product Name') is not None:
                BrandingProductName = context.Product.Attributes.GetByName('Branding Product Name').GetValue()
            discountThresholdQuery = "SELECT DISCOUNT_THRESHOLD FROM DB_DISCOUNT_TABLE_FLOOR_PRICE_CALCULATION WHERE REVENUE_TYPE = '" + str(item.ProductTypeName) +"' AND REGION = '{0}' AND AREA = '{1}' AND BIT_TYPE = '{2}' AND PRODUCT_NAME = '{3}'".format(region, area, item['BitType'], BrandingProductName)
            Trace.Write("FPC DISCOUNT QUERY : " + discountThresholdQuery)
            discountThreshold = SqlHelper.GetFirst(discountThresholdQuery)
            if discountThreshold is not None:
                Trace.Write("FPC DISCOUNT THRESHOLD : " + str(discountThreshold.DISCOUNT_THRESHOLD))
                item['FloorPrice'] = str((item.ListPrice) * (1 - float(discountThreshold.DISCOUNT_THRESHOLD)))
        else:
            Trace.Write('Eles side of script: item.CategoryId='+str(item.CategoryId))
            category_Id = ''
            al = SqlHelper.GetFirst("select * from PRODUCTS where PRODUCT_CATALOG_CODE= '"+ str(item.PartNumber) +"'")
            if al is not None:
                directory_cd  = SqlHelper.GetFirst("select * from Directory where product_id='"+ str(al.PRODUCT_ID) +"'")
                if directory_cd is not None:
                    category_Id = str(directory_cd.DIRECTORY_CD)
            if item.CategoryId != 0:
                category_Id = str(item.CategoryId)
            getCategoryName = SqlHelper.GetFirst("SELECT * FROM DIRECTORY_DEFN WHERE DIRECTORY_CD = " + category_Id)
            if getCategoryName is not None:
                discountThresholdQuery = "SELECT DISCOUNT_THRESHOLD FROM ALS_DISCOUNT_TABLE_FLOOR_PRICE_CALCULATION WHERE REVENUE_TYPE = '" + str(item.ProductTypeName) +"'AND PRODUCT_FAMILY = '" + str(getCategoryName.DIR_NAME) + "' AND AREA = '{0}'".format(area)
                Trace.Write("FPC DISCOUNT QUERY : " + discountThresholdQuery)
                discountThreshold = SqlHelper.GetFirst(discountThresholdQuery)
                if discountThreshold is not None:
                    Trace.Write("FPC DISCOUNT THRESHOLD : " + str(discountThreshold.DISCOUNT_THRESHOLD))
                    calculatedFloorPrice = (item.ListPrice) * (1 - float(discountThreshold.DISCOUNT_THRESHOLD))
                    item['FloorPrice'] = str(calculatedFloorPrice)