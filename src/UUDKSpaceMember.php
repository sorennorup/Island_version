<?php require 'podio_functions.php';
require 'Messages.php';

class UUDKSpaceMember extends Messages {
	private $args = array();
	private $user_id;
	private $uuplus_space_id = 4774;
	private $uuledelse_space_id = 4778;
	private $region_hovedstaden_space_id = 32906;
	private $region_sjaelland_space_id = 32907;
	private $region_syddanmark_space_id = 32909;
	private $region_midtjylland_space_id = 32910;
	private $region_nordjylland_space_id = 32911;
	private $user_list_app_id = 6778953;

	public function deleteSpaceMemberUUPlus($user_id){
	 try {
			PodioSpaceMember::delete($this->uuplus_space_id,$user_id);
		  //PodioSpaceMember::delete($this->uuledelse_app_id,$this->user_id);
	 }
	 catch(PodioError $e){
		  return $e;
	 }
	}

	public function addSpaceMembersUUPlus($mails = array()) {
		 try {
		 $this->args = array('role'=>'light','message'=> $this->UUPlusWelcomeMessage(),'mails'=> $mails);  
		  PodioSpaceMember::add($this->uuplus_space_id,$this->args);
		  return  'Dine brugere er nu medlemmer af UU+';
		 }
		 catch(PodioError $e){
			return 'No success '.$e;
		 }
	}

	public function addSpaceMembersUULedelse($mails = array()) {
		try {
		 $this->args = array('role'=>'light','message'=> $this->UULedelsesWelcomeMessage(),'mails'=> $mails);
		 PodioSpaceMember::add($this->uuledelse_space_id,$this->args);
		 return  'Dine brugere er sat ind'; 
		}
		catch (PodioError $e) {
			return 'No success<br/> Tjek at det er en valid mailadresse';
		}
	}
	
	public function addSpaceMembersRegion($mails = array(),$name,$region) {
		$space_id;
		switch($region) {
			case 'Region Hovedstaden':
				$space_id = $this->region_hovedstaden_space_id;
				 break;
			 case 'Region Syddanmark':
				$space_id = $this->region_syddanmark_space_id;
				break;
			 case 'Region Sjaelland':
				$space_id = $this->region_sjaelland_space_id;
				break;
			case 'Region Midtjylland':
				$space_id = $this->region_midtjylland_space_id;
				break;
			case 'Region Nordjylland':
				$space_id = $this->region_nordjylland_space_id;  
		}

		try {
			$this->args = array('role'=>'light','message'=> $this->regionSpacesWelcomeMessage($name, $region),'mails'=> $mails);
			PodioSpaceMember::add($space_id,$this->args);
			return  'Dine brugere er sat ind'; 
		}
		catch (PodioError $e) {
			return 'No success<br/> Tjek at det er en valid mailadresse';
		}
	}

	public function addToUserList($mail,$name, $org) {
		$attr = array( "navn" => $name, "mail" => $mail, 'liste-uu-posten-2' => 1,'uu-center'=> (int)$org, 'organisation'=>' X ');
		PodioItem::create( $this->user_list_app_id, array("fields" => $attr) );
	}

	public function getOrgList($app_id){
		$items = PodioItem::filter($app_id,array('limit' => 100));
		return itemSelectBox($items['items'], 'text'); 
	}
}

$space_member = new UUDKSpaceMember();
?>