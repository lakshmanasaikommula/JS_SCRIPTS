[IF]([EQ](<*CTX( Quote.CustomField(Sub_Region_Area) )*>,))
{[IF]([NEQ](<* TABLE ( SELECT PRICE FROM DB_PRICE WHERE MATERIAL_NUMBER = '<* ProductCode *>'
AND AREA = '' ) *>,)){<* TABLE ( SELECT PRICE FROM DB_PRICE WHERE MATERIAL_NUMBER = '<* ProductCode *>'
AND AREA = '' ) *>}
{[IF]([NEQ](<* TABLE ( SELECT LIST_PRICE FROM SLP) *>,))
{<* TABLE ( SELECT LIST_PRICE FROM SLP) *>} <* TABLE ( SELECT ListPrice FROM STRATEGICLISTPRICE WHERE RevenueType = '<* TABLE ( SELECT RT FROM RT ) *>'<* TABLE ( SELECT PRODUCTTYPE_NAME FROM PRODUCT_TYPES_DEFN where PRODUCTTYPE_CD = <* TABLE ( SELECT PRODUCTTYPE_CD FROM Products where system_id='<*CTX( Product.SystemId )*>') *>) *>
AND BitType = '<* TABLE ( SELECT PG FROM PG ) *>'<-- PG TABLE -->
<* TABLE ( SELECT DIR_NAME from DIRECTORY_DEFN where DIRECTORY_CD = <*TABLE(SELECT DIRECTORY_CD from DIRECTORY where PRODUCT_ID= <* TABLE(SELECT PRODUCT_ID from PRODUCTS where PRODUCT_CATALOG_CODE = '<*CTX( Product.PartNumber )*>') *> ) *>) *>
[IF](<*TABLE (select CN from CPF where NO = 1)*>)
{<*TABLE (select Result from CPF where NO = 1)*>}
[EQ](<*TABLE (select pf from pf)*>,Adaptive Bits)
{[IF](<*TABLE (select CN from CPF where NO = 2)*>)
{<*TABLE (select Result from CPF where NO = 2)*>}
[EQ](<*TABLE (select pf from pf)*>,EZ Case & EZ Ream)
{[IF](<*TABLE (select CN from CPF where NO = 3)*>)
{<*TABLE (select Result from CPF where NO = 3)*>}
[AND]([EQ](<*TABLE (select pf from pf)*>,PDC Bits),
[EQ][<*TABLE (select bty from bty)*>,Core])
{[IF](<*TABLE (select CN from CPF where NO = 4)*>)
{<*TABLE (select Result from CPF where NO = 4)*>}
[EQ](<*TABLE (select pf from pf)*>,Impregnated Bits)
{[IF](<*TABLE (select CN from CPF where NO = 5)*>)
{<*TABLE (select Result from CPF where NO = 5)*>}
[EQ](<*TABLE (select pf from pf)*>,PathMAKER)
{[IF](<*TABLE (select CN from CPF where NO = 6)*>)
{<*TABLE (select Result from CPF where NO = 6)*>}
[AND]([EQ](<*TABLE (select pf from pf)*>,PDC Bits),
[OR]([EQ](<*TABLE (select BPN from BPN)*>,HedgeHog),
[EQ](<*TABLE (select BPN from BPN)*>,HedgeHogCore)))
{[IF](<*TABLE (select CN from CPF where NO = 7)*>)
{<*TABLE (select Result from CPF where NO = 7)*>}
[AND]([EQ](<*TABLE (select pf from pf)*>,PDC Bits),
[EQ](<*TABLE (select bty from bty)*>,Diamond Matrix))
{[IF](<*TABLE (select CN from CPF where NO = 8)*>)
{<*TABLE (select Result from CPF where NO = 8)*>}
[EQ](<*TABLE (select pf from pf)*>,Hybrid Bits)
{[IF](<*TABLE (select CN from CPF where NO = 9)*>)
{<*TABLE (select Result from CPF where NO = 9)*>}
[AND]([EQ](<*TABLE (select pf from pf)*>,Tricones),
[OR]([EQ](<*TABLE (select BPN from BPN)*>,Vanguard Drill Out),
[EQ](<*TABLE (select BPN from BPN)*>,Vanguard Metal Face Seal),
[EQ](<*TABLE (select BPN from BPN)*>,Vanguard),
[EQ](<*TABLE (select BPN from BPN)*>,Vanguard Arabia Metal Face Seal),
[EQ](<*TABLE (select BPN from BPN)*>,Vanguard Geothermal Metal Face Seal),
[EQ](<*TABLE (select BPN from BPN)*>,Vanguard Air),
[EQ](<*TABLE (select BPN from BPN)*>,Vanguard Geothermal),
[EQ](<*TABLE (select BPN from BPN)*>,Vanguard Arabia),
[EQ](<*TABLE (select BPN from BPN)*>,VG)))
{[IF](<*TABLE (select CN from CPF where NO = 10)*>)
{<*TABLE (select Result from CPF where NO = 10)*>}
[EQ](<*TABLE (select pf from pf)*>,Tricones)
{[IF](<*TABLE (select CN from CPF where NO = 11)*>)
{<*TABLE (select Result from CPF where NO = 11)*>}
[EQ](<*TABLE (select BPN from BPN)*>,Dynamus)
{[IF](<*TABLE (select CN from CPF where NO = 12)*>)
{<*TABLE (select Result from CPF where NO = 12)*>}
[AND]([EQ](<*TABLE (select bty from bty)*>,Standard PDC),
[OR]([EQ](<*TABLE (select BPN from BPN)*>,Quantec),
[EQ](<*TABLE (select BPN from BPN)*>,Quantec Force)))
{[IF](<*TABLE (select CN from CPF where NO = 13)*>)
{<*TABLE (select Result from CPF where NO = 13)*>}
[EQ](<*TABLE (select BPN from BPN)*>,Ballaset)
{[IF](<*TABLE (select CN from CPF where NO = 14)*>)
{<*TABLE (select Result from CPF where NO = 14)*>}
[EQ](<*TABLE (select BPN from BPN)*>,Ballaset)
{[IF](<*TABLE (select CN from CPF where NO = 15)*>)
{<*TABLE (select Result from CPF where NO = 15)*>}
[AND]([EQ](<*TABLE (select bty from bty)*>,Unkonown),
[EQ](<*TABLE (select pn from pn)*>,Talon Force))
{OTHER}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]
AND Cast (BitSize AS float) = '<* TABLE ( SELECT BD FROM BD ) *>' ) *><* TABLE(SELECT STANDARD_ATTRIBUTE_VALUE FROM STANDARD_ATTRIBUTE_VALUES WHERE STANDARD_ATTRIBUTE_VALUE_CD= <* TABLE(SELECT STANDARD_ATTRIBUTE_VALUE_CD FROM ATTRIBUTES WHERE PA_ID=<* TABLE(SELECT PA_ID FROM PRODUCT_ATTRIBUTES WHERE PRODUCT_ID=<*TABLE(SELECT PRODUCT_ID FROM PRODUCTS WHERE system_id='<*CTX( Product.SystemId )*>' ) *> and STANDARD_ATTRIBUTE_CODE = '<*Table(Select STANDARD_ATTRIBUTE_CODE FROM ATTRIBUTE_DEFN WHERE SYSTEM_ID = 'Bit_Diameter_2_cpq')*>' ) *> ) *> )*>
{[IF]([NEQ](<* TABLE ( SELECT PRICE FROM LIST_PRICE) *>,))
{<* TABLE ( SELECT PRICE FROM LIST_PRICE) *>}{9999}[ENDIF]}[ENDIF]}[ENDIF] }
{[IF]([NEQ](<* TABLE ( SELECT PRICE FROM DB_PRICE WHERE MATERIAL_NUMBER = '<* ProductCode *>'
AND AREA = '<*CTX( Quote.CustomField(Sub_Region_Area) )*>' ) *>,)){<* TABLE ( SELECT PRICE FROM DB_PRICE WHERE MATERIAL_NUMBER = '<* ProductCode *>'  
AND AREA = '<*CTX( Quote.CustomField(Sub_Region_Area) )*>' ) *>}
{[IF]([NEQ](<* TABLE ( SELECT LIST_PRICE FROM SLP) *>,))
{<* TABLE ( SELECT LIST_PRICE FROM SLP) *>}<* TABLE ( SELECT ListPrice FROM STRATEGICLISTPRICE
WHERE RevenueType = '<* TABLE ( SELECT RT FROM RT ) *>'<* TABLE ( SELECT PRODUCTTYPE_NAME FROM PRODUCT_TYPES_DEFN where PRODUCTTYPE_CD = <* TABLE ( SELECT PRODUCTTYPE_CD FROM Products where system_id='<*CTX( Product.SystemId )*>') *>) *>
AND BitType = '<* TABLE ( SELECT PG FROM PG ) *>'
[IF](<*TABLE (select CN from CPF where NO = 1)*>)
{<*TABLE (select Result from CPF where NO = 1)*>}
[EQ](<*TABLE (select pf from pf)*>,Adaptive Bits)
{[IF](<*TABLE (select CN from CPF where NO = 2)*>)
{<*TABLE (select Result from CPF where NO = 2)*>}
[EQ](<*TABLE (select pf from pf)*>,EZ Case & EZ Ream)
{[IF](<*TABLE (select CN from CPF where NO = 3)*>)
{<*TABLE (select Result from CPF where NO = 3)*>}
[AND]([EQ](<*TABLE (select pf from pf)*>,PDC Bits),
[EQ][<*TABLE (select bty from bty)*>,Core])
{[IF](<*TABLE (select CN from CPF where NO = 4)*>)
{<*TABLE (select Result from CPF where NO = 4)*>}
[EQ](<*TABLE (select pf from pf)*>,Impregnated Bits)
{[IF](<*TABLE (select CN from CPF where NO = 5)*>)
{<*TABLE (select Result from CPF where NO = 5)*>}
[EQ](<*TABLE (select pf from pf)*>,PathMAKER)
{[IF](<*TABLE (select CN from CPF where NO = 6)*>)
{<*TABLE (select Result from CPF where NO = 6)*>}
[AND]([EQ](<*TABLE (select pf from pf)*>,PDC Bits),
[OR]([EQ](<*TABLE (select BPN from BPN)*>,HedgeHog),
[EQ](<*TABLE (select BPN from BPN)*>,HedgeHogCore)))
{[IF](<*TABLE (select CN from CPF where NO = 7)*>)
{<*TABLE (select Result from CPF where NO = 7)*>}
[AND]([EQ](<*TABLE (select pf from pf)*>,PDC Bits),
[EQ](<*TABLE (select bty from bty)*>,Diamond Matrix))
{[IF](<*TABLE (select CN from CPF where NO = 8)*>)
{<*TABLE (select Result from CPF where NO = 8)*>}
[EQ](<*TABLE (select pf from pf)*>,Hybrid Bits)
{[IF](<*TABLE (select CN from CPF where NO = 9)*>)
{<*TABLE (select Result from CPF where NO = 9)*>}
[AND]([EQ](<*TABLE (select pf from pf)*>,Tricones),
[OR]([EQ](<*TABLE (select BPN from BPN)*>,Vanguard Drill Out),
[EQ](<*TABLE (select BPN from BPN)*>,Vanguard Metal Face Seal),
[EQ](<*TABLE (select BPN from BPN)*>,Vanguard),
[EQ](<*TABLE (select BPN from BPN)*>,Vanguard Arabia Metal Face Seal),
[EQ](<*TABLE (select BPN from BPN)*>,Vanguard Geothermal Metal Face Seal),
[EQ](<*TABLE (select BPN from BPN)*>,Vanguard Air),
[EQ](<*TABLE (select BPN from BPN)*>,Vanguard Geothermal),
[EQ](<*TABLE (select BPN from BPN)*>,Vanguard Arabia),
[EQ](<*TABLE (select BPN from BPN)*>,VG)))
{[IF](<*TABLE (select CN from CPF where NO = 10)*>)
{<*TABLE (select Result from CPF where NO = 10)*>}
[EQ](<*TABLE (select pf from pf)*>,Tricones)
{[IF](<*TABLE (select CN from CPF where NO = 11)*>)
{<*TABLE (select Result from CPF where NO = 11)*>}
[EQ](<*TABLE (select BPN from BPN)*>,Dynamus)
{[IF](<*TABLE (select CN from CPF where NO = 12)*>)
{<*TABLE (select Result from CPF where NO = 12)*>}
[AND]([EQ](<*TABLE (select bty from bty)*>,Standard PDC),
[OR]([EQ](<*TABLE (select BPN from BPN)*>,Quantec),
[EQ](<*TABLE (select BPN from BPN)*>,Quantec Force)))
{[IF](<*TABLE (select CN from CPF where NO = 13)*>)
{<*TABLE (select Result from CPF where NO = 13)*>}
[EQ](<*TABLE (select BPN from BPN)*>,Ballaset)
{[IF](<*TABLE (select CN from CPF where NO = 14)*>)
{<*TABLE (select Result from CPF where NO = 14)*>}
[EQ](<*TABLE (select BPN from BPN)*>,Ballaset)
{[IF](<*TABLE (select CN from CPF where NO = 15)*>)
{<*TABLE (select Result from CPF where NO = 15)*>}
[AND]([EQ](<*TABLE (select bty from bty)*>,Unkonown),
[EQ](<*TABLE (select pn from pn)*>,Talon Force))
{OTHER}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]
AND Cast (BitSize AS float) = '<* TABLE ( SELECT BD FROM BD ) *>' ) *><* TABLE(SELECT STANDARD_ATTRIBUTE_VALUE FROM STANDARD_ATTRIBUTE_VALUES WHERE STANDARD_ATTRIBUTE_VALUE_CD= <* TABLE(SELECT STANDARD_ATTRIBUTE_VALUE_CD FROM ATTRIBUTES WHERE PA_ID=<* TABLE(SELECT PA_ID FROM PRODUCT_ATTRIBUTES WHERE PRODUCT_ID=<*TABLE(SELECT PRODUCT_ID FROM PRODUCTS WHERE system_id='<*CTX( Product.SystemId )*>' ) *> and STANDARD_ATTRIBUTE_CODE = '<*Table(Select STANDARD_ATTRIBUTE_CODE FROM ATTRIBUTE_DEFN WHERE SYSTEM_ID = 'Bit_Diameter_2_cpq')*>' ) *> ) *> )*>
{[IF]([NEQ](<* TABLE ( SELECT PRICE FROM LIST_PRICE) *>,))
{<* TABLE ( SELECT PRICE FROM LIST_PRICE) *>}{9999}[ENDIF]}[ENDIF]}[ENDIF]}[ENDIF]