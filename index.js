RGBA(`

float col(vec2 uv, float d) {
    float e = 0.1, dist;
    
    uv = fract(uv*3.) - 0.5; 
    dist += sin(d+time+length(uv*49.) * log(length(uv)));
    
    uv = fract(uv*2.) - 0.5; 
    dist += sin(d-time-length(uv*99.) * log(length(uv)));
     
    uv = fract(uv*3.) - 0.5; 
    dist += sin(d+time+length(uv*199.) * log(length(uv)))*cos(time*0.7);
    
    uv = fract(uv*2.) - 0.5; 
    dist += sin(d-time-length(uv*99.) * log(length(uv)))*sin(time*0.8);
    
    return smoothstep(0.5-e, 0.5+e, dist);
}

void main() {
    vec2 uv = gl_FragCoord.xy/resolution.xy-0.5;
    uv.x *= resolution.x/resolution.y;
    
   
   
    gl_FragColor = vec4(
        col(uv, -0.2),
        col(uv,  0.0),
        col(uv,  0.2),
        1.0
    );
    
    
}
`)