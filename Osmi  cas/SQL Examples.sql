--- Simple Select
SELECT 
	*
FROM tTrnProfile 

---SELECT with Inner Join
SELECT 
	PR.afUsername
FROM tTrnProfile PR
JOIN tTrnPost PO
	ON PR.pkProfileID = PO.fkProfileID

---SELECT with Left Join
SELECT 
	PR.afUsername,
	C.afCity
FROM tTrnProfile PR
LEFT JOIN tTrnPost PO
	ON PR.pkProfileID = PO.fkProfileID
LEFT JOIN tMstCity C
	ON C.pkCityID = PR.fkCityID


---Ordering
SELECT 
	PR.afUsername,
	C.afCity
FROM tTrnProfile PR
LEFT JOIN tTrnPost PO
	ON PR.pkProfileID = PO.fkProfileID
LEFT JOIN tMstCity C
	ON C.pkCityID = PR.fkCityID

ORDER BY PR.afUsername DESC
--ASC is for A to B, DESC is oppostite 

--Count with a Grouping
SELECT 
	C.afCity,
	COUNT(*)
FROM tTrnProfile PR
LEFT JOIN tMstCity C
	ON C.pkCityID = PR.fkCityID

GROUP BY C.afCity

-- DateDIFF Function
SELECT 
	PR.afFirstName,
	DATEDIFF(YEAR,PR.afDateofBirth,GETDATE()) AS [Age]
FROM tTrnProfile PR

--SUM with Date Diff Function
SELECT 
	SUM(DATEDIFF(YEAR,PR.afDateofBirth,GETDATE())) AS [Age]
FROM tTrnProfile PR



