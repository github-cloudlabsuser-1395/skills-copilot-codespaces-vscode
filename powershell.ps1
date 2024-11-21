# Variables
$resourceGroupName = "example-resources"
$location = "East US"
$vmName = "example-vm"
$adminUsername = "adminuser"
$adminPassword = ConvertTo-SecureString "Password1234!" -AsPlainText -Force
$vmSize = "Standard_DS1_v2"
$vnetName = "example-vnet"
$subnetName = "example-subnet"
$ipName = "example-ip"
$nicName = "example-nic"
$imagePublisher = "Canonical"
$imageOffer = "UbuntuServer"
$imageSku = "18.04-LTS"

# Create a resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a virtual network
$vnet = New-AzVirtualNetwork -ResourceGroupName $resourceGroupName -Location $location -Name $vnetName -AddressPrefix "10.0.0.0/16"

# Create a subnet
$subnet = Add-AzVirtualNetworkSubnetConfig -Name $subnetName -AddressPrefix "10.0.2.0/24" -VirtualNetwork $vnet
$vnet | Set-AzVirtualNetwork

# Create a public IP address
$publicIp = New-AzPublicIpAddress -ResourceGroupName $resourceGroupName -Location $location -Name $ipName -AllocationMethod Dynamic

# Create a network interface
$nic = New-AzNetworkInterface -ResourceGroupName $resourceGroupName -Location $location -Name $nicName -SubnetId $subnet.Id -PublicIpAddressId $publicIp.Id

# Specify the virtual machine image
$image = Get-AzVMImagePublisher -Location $location | Where-Object { $_.PublisherName -eq $imagePublisher } | Get-AzVMImageOffer | Where-Object { $_.Offer -eq $imageOffer } | Get-AzVMImageSku | Where-Object { $_.Skus -eq $imageSku } | Get-AzVMImage

# Create the virtual machine configuration
$vmConfig = New-AzVMConfig -VMName $vmName -VMSize $vmSize | `
    Set-AzVMOperatingSystem -Linux -ComputerName $vmName -Credential (New-Object PSCredential ($adminUsername, $adminPassword)) | `
    Set-AzVMSourceImage -PublisherName $imagePublisher -Offer $imageOffer -Skus $imageSku -Version "latest" | `
    Add-AzVMNetworkInterface -Id $nic.Id

# Create the virtual machine
New-AzVM -ResourceGroupName $resourceGroupName -Location $location -VM $vmConfig