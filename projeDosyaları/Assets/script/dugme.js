#pragma strict

public var flareLayer : Behaviour;


public var dugmeBir : GameObject;
public var dugmeIki : GameObject;


public var aksam : Material;
public var sabah : Material;


public var tBir : Light;
public var tIki : Light;
public var tUc : Light;
public var tDort : Light;
public var tBes : Light;
public var tAlti : Light;
public var tYedi : Light;
public var tSekiz : Light;
public var tDokuz : Light;
public var tOn : Light;
public var tOnBir : Light;
public var tOnIki : Light;
public var tOnUc : Light;
public var tOnDort : Light;
public var tOnBes : Light;
public var tOnAlti : Light;

public var gunes : Light;

function Start () {
	RenderSettings.skybox = sabah;
	dugmeIki.transform.position.z = 53.41;
}

function Update () {
}
function OnTriggerStay ( temas : Collider ){


	if (temas.gameObject.name == "shtdügme1" && Input.GetKey("e") ){
		
		dugmeBir.transform.position.z = 52.85;
		dugmeIki.transform.position.z = 53.51;
	
		RenderSettings.skybox = aksam;
		
		tBir.enabled = true;
		tIki.enabled = true;
		tUc.enabled = true;
		tDort.enabled = true;
		tBes.enabled = true;
		tAlti.enabled = true;
		tYedi.enabled = true;
		tSekiz.enabled = true;
		tDokuz.enabled = true;
		tOn.enabled = true;
		tOnBir.enabled = true;
		tOnIki.enabled = true;
		tOnUc.enabled = true;
		tOnDort.enabled = true;
		tOnBes.enabled = true;
		tOnAlti.enabled = true;
		
		gunes.enabled = false;
		flareLayer.enabled = false;
		
		
	}
	if (temas.gameObject.name == "shtdügme2" && Input.GetKey("e") ){
		
		dugmeBir.transform.position.z = 52.75;
		dugmeIki.transform.position.z = 53.41;
				
		RenderSettings.skybox = sabah;
		
		tBir.enabled = false;
		tIki.enabled = false;
		tUc.enabled = false;
		tDort.enabled = false;
		tBes.enabled = false;
		tAlti.enabled = false;
		tYedi.enabled = false;
		tSekiz.enabled = false;
		tDokuz.enabled = false;
		tOn.enabled = false;
		tOnBir.enabled = false;
		tOnIki.enabled = false;
		tOnUc.enabled = false;
		tOnDort.enabled = false;
		tOnBes.enabled = false;
		tOnAlti.enabled = false;
		
		gunes.enabled = true;
		flareLayer.enabled = true;
		
	}

}

